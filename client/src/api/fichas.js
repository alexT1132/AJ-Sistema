import axios from "./axios.js";

export const getFichasRequest = () => axios.get('/fichas');

export const getFichaRequest = (id) => axios.get(`/fichas/${id}`);

export const createFichaRequest = (ficha) => axios.post('/fichas', ficha);

export const deleteFichaRequest = (id) => axios.delete(`/fichas/${id}`);