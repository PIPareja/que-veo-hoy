import { useQuery } from '@tanstack/react-query'
import { useQuestionnaireStore } from '@/store/questionnaireStore'
import { getMovieRecommendations } from '@/services/tmdb'
import { moodToGenres, durationToMinutes } from '@/lib/questionnaireMap'

export function useMovieRecommendations(enabled: boolean) {
    const { mood, duration } = useQuestionnaireStore()

    return useQuery({
        queryKey: ['recommendations', mood, duration],
        queryFn: async () => {
            const genres = moodToGenres[mood!]
            const maxMinutes = durationToMinutes[duration!]
            return getMovieRecommendations(genres, maxMinutes)
        },
        enabled: enabled && mood !== null && duration !== null,
        select: (data) => data.results.slice(0, 6),
    })
}