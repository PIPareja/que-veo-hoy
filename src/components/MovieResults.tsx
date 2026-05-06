import { useMovieRecommendations } from '@/hooks/useMovieRecommendations'
import { useQuestionnaireStore } from '@/store/questionnaireStore'
import MovieCard from '@/components/MovieCard'

interface MovieResultsProps {
    onReset: () => void
}

function MovieResults({ onReset }: MovieResultsProps) {
    const { reset } = useQuestionnaireStore()
    const { data: movies, isLoading, isError } = useMovieRecommendations(true)

    const handleReset = () => {
        reset()
        onReset()
    }

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
                <div className="w-12 h-12 border-4 border-gray-700 border-t-white rounded-full animate-spin" />
                <p className="text-gray-400">Buscando la película perfecta para ti...</p>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="text-center py-24">
                <p className="text-red-400 text-lg mb-4">Algo salió mal. Intenta de nuevo.</p>
                <button onClick={handleReset} className="text-gray-400 hover:text-white underline">
                    Volver al cuestionario
                </button>
            </div>
        )
    }

    return (
        <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-white">Tu recomendación de hoy</h2>
                    <p className="text-gray-400 mt-1">Basada en tu estado de ánimo y preferencias</p>
                </div>
                <button
                    onClick={handleReset}
                    className="text-sm text-gray-400 hover:text-white underline transition-colors"
                >
                    ← Volver
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {movies?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default MovieResults