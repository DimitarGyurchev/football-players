import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import { usePlayerContext } from "../../contexts/FootballPlayerContext";

export const FootballPlayerOwner = ({
    children,
}) => {
    const { playerId } = useParams();
    const { getPlayer } = usePlayerContext();
    const { userId } = useAuthContext();

    const currentPlayer = getPlayer(playerId);

    if (currentPlayer && currentPlayer._ownerId !== userId) {
        return <Navigate to={`/catalog/${playerId}`} replace />
    }

    return children ? children : <Outlet />
};