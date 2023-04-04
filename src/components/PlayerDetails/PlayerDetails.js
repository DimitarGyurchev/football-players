import { useEffect, useReducer } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';

import { footballPlayerServiceFactory } from "../../services/footballPlayerService";
import * as commentService from '../../services/commentService';
import { useService } from '../../hooks/useService';
import { useAuthContext } from "../../contexts/AuthContext";

import { AddComment } from "./AddComment/AddComment";
import { playerReducer } from "../../reducers/playerReducer";
import { usePlayerContext } from "../../contexts/FootballPlayerContext";

export const PlayerDetails = () => {
    const { playerId } = useParams();
    const { userId, isAuthenticated, userEmail } = useAuthContext();
    const { deletePlayer } = usePlayerContext();
    const [player, dispatch] = useReducer(playerReducer, {});
    const footballPlayerService = useService(footballPlayerServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            footballPlayerService.getOne(playerId),
            commentService.getAll(playerId)
        ]).then(([playerData, comments]) => {
            const playerState = {
                ...playerData,
                comments
            };
            dispatch({ type: 'PLAYER_FETCH', payload: playerState })
        });
    }, [playerId]);

    const onCommentSubmit = async (values) => {
        const response = await commentService.create(playerId, values.comment);

        dispatch({
            type: 'COMMENT_ADD',
            payload: response,
            userEmail
        });
    };

    const isOwner = player._owner === userId;

    const onDeleteClick = async () => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you want to delete this player ${player.fullName}`);

        if (result) {
            await footballPlayerService.delete(player._id);

            deletePlayer(player._id);

            navigate('/catalog');
        }
    };

    return (
        <section className="player_details">
            <h1>Football Player Details</h1>
            <div className="info_section">
                <div className="player_header">
                    <h1>{player.fullName}</h1>
                    <img className="game_img" src={player.imageUrl} alt="Football Player img" />
                    <span className="age">Age: {player.age}</span>
                    <span className="nationality">Nationality: {player.nationality}</span>
                    <span className="position">Position: {player.position}</span>
                </div>

                <div className="details_comments">
                    <h1>Comments:</h1>
                    <ul>
                        {player.comments && player.comments.map(x => (
                            <li key={x._id} className="comment">
                                <p>{x.author.email}: {x.comment}</p>
                            </li>
                        ))}
                    </ul>

                    {!player.comments?.length && (
                        <p className="no_comment">No comments!</p>
                    )}
                </div>

                {isOwner && (
                    <div className="buttons">
                        <Link to={`/catalog/${player._id}/edit`} className="button">Edit</Link>
                        <button className="button" onClick={onDeleteClick}>Delete</button>
                    </div>
                )}
            </div>
            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
        </section>
    );

}