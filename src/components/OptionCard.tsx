interface OptionCardProps {
    emoji: string
    label: string
    description: string
    selected: boolean
    onClick: () => void
}

function OptionCard({ emoji, label, description, selected, onClick }: OptionCardProps) {
    return (
        <button
            onClick={onClick}
            className={`
        w-full text-left p-5 rounded-2xl border-2 transition-all duration-200
        flex items-start gap-4 cursor-pointer
        ${selected
                    ? 'border-white bg-white/10'
                    : 'border-gray-700 bg-gray-900 hover:border-gray-500 hover:bg-gray-800'
                }
      `}
        >
            <span className="text-3xl">{emoji}</span>
            <div>
                <p className="font-medium text-white text-base">{label}</p>
                <p className="text-sm text-gray-400 mt-1">{description}</p>
            </div>
        </button>
    )
}

export default OptionCard