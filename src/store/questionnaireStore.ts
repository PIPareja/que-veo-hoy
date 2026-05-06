import { create } from 'zustand'

type Mood = 'relajado' | 'con_energia' | 'emotivo' | 'pensativo'
type Company = 'solo' | 'pareja' | 'familia' | 'amigos'
type Duration = 'corta' | 'media' | 'larga'

interface QuestionnaireState {
    mood: Mood | null
    company: Company | null
    duration: Duration | null
    setMood: (mood: Mood) => void
    setCompany: (company: Company) => void
    setDuration: (duration: Duration) => void
    reset: () => void
    isComplete: () => boolean
}

export const useQuestionnaireStore = create<QuestionnaireState>((set, get) => ({
    mood: null,
    company: null,
    duration: null,

    setMood: (mood) => set({ mood }),
    setCompany: (company) => set({ company }),
    setDuration: (duration) => set({ duration }),

    reset: () => set({ mood: null, company: null, duration: null }),

    isComplete: () => {
        const { mood, company, duration } = get()
        return mood !== null && company !== null && duration !== null
    },
}))