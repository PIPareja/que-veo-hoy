import { useQuestionnaireStore } from '@/store/questionnaireStore'
import OptionCard from '@/components/OptionCard'

const moodOptions = [
    { value: 'relajado', emoji: '😌', label: 'Relajado', description: 'Algo tranquilo para desconectarme' },
    { value: 'con_energia', emoji: '⚡', label: 'Con energía', description: 'Acción, ritmo y adrenalina' },
    { value: 'emotivo', emoji: '🥺', label: 'Emotivo', description: 'Quiero sentir algo profundo' },
    { value: 'pensativo', emoji: '🤔', label: 'Pensativo', description: 'Algo que me haga reflexionar' },
] as const

const companyOptions = [
    { value: 'solo', emoji: '🧘', label: 'Solo', description: 'Mi tiempo, mis reglas' },
    { value: 'pareja', emoji: '💑', label: 'En pareja', description: 'Una noche especial para dos' },
    { value: 'familia', emoji: '👨‍👩‍👧', label: 'En familia', description: 'Para todos, sin dramas' },
    { value: 'amigos', emoji: '🎉', label: 'Con amigos', description: 'Algo que todos disfruten' },
] as const

const durationOptions = [
    { value: 'corta', emoji: '⚡', label: 'Menos de 1h30', description: 'Rápida y directa' },
    { value: 'media', emoji: '🎬', label: '1h30 a 2h30', description: 'El largo perfecto' },
    { value: 'larga', emoji: '🍿', label: 'Más de 2h30', description: 'Me comprometo en serio' },
] as const

interface QuestionnaireProps {
    onSubmit: () => void
}

function Questionnaire({ onSubmit }: QuestionnaireProps) {
    const { mood, company, duration, setMood, setCompany, setDuration, isComplete } = useQuestionnaireStore()

    return (
        <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-3">¿Qué veo hoy?</h1>
                <p className="text-gray-400 text-lg">Responde 3 preguntas y te recomendamos la película perfecta</p>
            </div>

            <div className="space-y-10">
                <section>
                    <h2 className="text-lg font-medium text-gray-300 mb-4">¿Cómo estás de ánimo?</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {moodOptions.map((option) => (
                            <OptionCard
                                key={option.value}
                                emoji={option.emoji}
                                label={option.label}
                                description={option.description}
                                selected={mood === option.value}
                                onClick={() => setMood(option.value)}
                            />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-lg font-medium text-gray-300 mb-4">¿Con quién ves?</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {companyOptions.map((option) => (
                            <OptionCard
                                key={option.value}
                                emoji={option.emoji}
                                label={option.label}
                                description={option.description}
                                selected={company === option.value}
                                onClick={() => setCompany(option.value)}
                            />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-lg font-medium text-gray-300 mb-4">¿Cuánto tiempo tienes?</h2>
                    <div className="grid grid-cols-3 gap-3">
                        {durationOptions.map((option) => (
                            <OptionCard
                                key={option.value}
                                emoji={option.emoji}
                                label={option.label}
                                description={option.description}
                                selected={duration === option.value}
                                onClick={() => setDuration(option.value)}
                            />
                        ))}
                    </div>
                </section>

                <button
                    onClick={onSubmit}
                    disabled={!isComplete()}
                    className="w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-200
            disabled:opacity-30 disabled:cursor-not-allowed
            bg-white text-gray-950 hover:bg-gray-200 active:scale-95"
                >
                    Ver recomendaciones →
                </button>
            </div>
        </div>
    )
}

export default Questionnaire