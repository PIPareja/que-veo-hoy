import { getImageUrl } from '@/services/tmdb'
import type { Movie } from '@/types/movie'

interface MovieCardProps {
    movie: Movie
}

function MovieCard({ movie }: MovieCardProps) {
    const imageUrl = getImageUrl(movie.poster_path)
    const year = movie.release_date?.split('-')[0] ?? 'N/A'
    const rating = movie.vote_average.toFixed(1)

    return (
        <div className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105">
            <div className="aspect-[2/3] relative overflow-hidden">
                <img
                    src={imageUrl}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-4">
                <h3 className="font-semibold text-white text-sm leading-tight line-clamp-2 mb-2">
                    {movie.title}
                </h3>
                <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{year}</span>
                    <div className="flex items-center gap-1">
                        <span className="text-yellow-400 text-xs">★</span>
                        <span className="text-gray-300 text-xs">{rating}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard