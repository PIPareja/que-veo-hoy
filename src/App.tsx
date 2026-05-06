import { useEffect } from 'react'
import { tmdbClient } from '@/services/tmdb'

function App() {
  useEffect(() => {
    tmdbClient.get('/movie/popular')
      .then(res => console.log(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-white">
        Qué veo hoy
      </h1>
    </div>
  )
}

export default App