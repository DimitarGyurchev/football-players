import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/comments';
const request = requestFactory();

export const getAll = async (playerId) => {
    const searchQuery = encodeURIComponent(`playerId="${playerId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);

    return comments;
};

export const create = async (playerId, comment) => {
    const result = await request.post(baseUrl, { playerId, comment });
    return result;
}