import axios from "axios";

//http://sujeitoprogramador.com/r-api/?api=filmes
const api = axios.create({ baseURL: 'http://sujeitoprogramador.com/' });

export default api;