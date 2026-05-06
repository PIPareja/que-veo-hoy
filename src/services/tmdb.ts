import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

export const tmdbClient = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
        language: 'es-ES',
    },
})