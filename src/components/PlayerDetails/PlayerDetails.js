import styles from './PlayerDetails.module.css'

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

    const isOwner = player._ownerId === userId;

    const confirmDialog = (message) => {
        return new Promise((resolve) => {
            const confirmation = window.confirm(message);
            resolve(confirmation);
        });
    };

    const onDeleteClick = async () => {
        const result = await confirmDialog(`Are you sure you want to delete this player ${player.fullName}`);

        if (result) {
            if (isOwner) {
                await footballPlayerService.delete(player._id);
                deletePlayer(player._id);
                return navigate('/catalog');
            } else {
                alert('You are not the owner of this player');
            }
        }
    };

    return (
        <section className={styles.player_details}>
            <h1>Football Player Details</h1>
            <div className={styles.info_section}>
                <div className={styles.player_header}>
                    <h1>{player.fullName}</h1>
                    <img className={styles.game_img} src={player.imageUrl} alt="Football Player img" />
                    <span className={styles.age}>Age: {player.age}</span>
                    <span className={styles.nationality}>Nationality: {player.nationality}</span>
                    <span className={styles.position}>Position: {player.position}</span>
                </div>

                <div className={styles.details_comments}>
                    <h1>Comments:</h1>
                    <ul>
                        {player.comments && player.comments.map(x => (
                            <li key={x._id} className={styles.comment}>
                                <p>{x.author.email}: {x.comment}</p>
                            </li>
                        ))}
                    </ul>

                    {!player.comments?.length && (
                        <p className={styles.no_comment}>No comments!</p>
                    )}
                </div>

                {isOwner && (
                    <div className={styles.buttons}>
                        <Link to={`/catalog/${player._id}/edit`} className={styles.button_edit}>Edit</Link>
                        <button className={styles.button_delete} onClick={onDeleteClick}>Delete</button>
                    </div>
                )}
            </div>
            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
        </section>
    );

}