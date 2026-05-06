import { useState } from 'react'
import Questionnaire from '@/components/Questionnaire'

function HomePage() {
    const [showResults, setShowResults] = useState(false)

    return (
        <div>
            {!showResults ? (
                <Questionnaire onSubmit={() => setShowResults(true)} />
            ) : (
                <div className="text-center text-white">
                    <h2 className="text-2xl font-bold">Aquí van los resultados</h2>
                    <button
                        onClick={() => setShowResults(false)}
                        className="mt-4 text-gray-400 hover:text-white underline"
                    >
                        Volver al cuestionario
                    </button>
                </div>
            )}
        </div>
    )
}

export default HomePage