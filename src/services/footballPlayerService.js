import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030'
const url = `${baseUrl}/data/players`;

export const footballPlayerServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(url);
        const players = Object.values(result);

        return players;
    }

    const getOne = async (playerId) => {
        const result = await request.get(`${url}/${playerId}`);

        return result;
    }

    const create = async (playerData) => {
        const result = await request.post(url, playerData);

        return result;
    }

    const edit = (playerId, data) => request.put(`${url}/${playerId}`, data);

    const deletePlayer = (playerId) => request.delete(`${url}/${playerId}`);

    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deletePlayer
    }
}