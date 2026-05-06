import { useState } from 'react'
import Questionnaire from '@/components/Questionnaire'
import MovieResults from '@/components/MovieResults'

function HomePage() {
    const [showResults, setShowResults] = useState(false)

    return (
        <div>
            {!showResults ? (
                <Questionnaire onSubmit={() => setShowResults(true)} />
            ) : (
                <MovieResults onReset={() => setShowResults(false)} />
            )}
        </div>
    )
}

export default HomePage