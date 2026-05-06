import axios from 'axios'
import type { TMDBResponse, Genre } from '@/types/movie'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

export const tmdbClient = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
        language: 'es-ES',
    },
})

export const getMovieRecommendations = async (
    genreIds: number[],
    maxMinutes: number
): Promise<TMDBResponse> => {
    const { data } = await tmdbClient.get<TMDBResponse>('/discover/movie', {
        params: {
            with_genres: genreIds.join(','),
            'with_runtime.lte': maxMinutes,
            sort_by: 'popularity.desc',
            'vote_count.gte': 100,
        },
    })
    return data
}

export const getGenres = async (): Promise<Genre[]> => {
    const { data } = await tmdbClient.get<{ genres: Genre[] }>('/genre/movie/list')
    return data.genres
}

export const getImageUrl = (path: string | null, size = 'w500'): string => {
    if (!path) return '/placeholder-movie.png'
    return `https://image.tmdb.org/t/p/${size}${path}`
}