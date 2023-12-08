export interface Question {
    id: number
    answer: {
        answered: boolean
    },
    type: string
    text: string
    info?: string
    description?: string
    category: string
}