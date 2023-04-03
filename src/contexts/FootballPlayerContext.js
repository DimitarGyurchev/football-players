import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { footballPlayerServiceFactory } from '../services/footballPlayerService';

export const FootballPlayerContext = createContext();

export const FootballPlayerProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [players, setPlayers] = useState([]);
    const playerService = footballPlayerServiceFactory();

    useEffect(() => {
        playerService.getAll()
            .then(result => {
                setPlayers(result)
            })
    }, []);

    const onCreatePlayerSubmit = async (data) => {
        const newPlayer = await playerService.create(data);

        setPlayers(state => [...state, newPlayer]);

        navigate('/catalog');
    };

    const onPlayerEditSubmit = async (values) => {
        const result = await playerService.edit(values._id, values);

        setPlayers(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/catalog/${values._id}`);
    };

    const deletePlayer = (playerId) => {
        setPlayers(state => state.filter(game => game._id !== playerId));
    };

    const getPlayer = (playerId) => {
        return players.find(player => player._id === playerId);
    };

    const contextValues = {
        players,
        onCreatePlayerSubmit,
        onPlayerEditSubmit,
        deletePlayer,
        getPlayer
    };

    return (
        <FootballPlayerContext.Provider value={contextValues}>
            {children}
        </FootballPlayerContext.Provider>
    );
};

export const usePlayerContext = () => {
    const context = useContext(FootballPlayerContext);

    return context;
}