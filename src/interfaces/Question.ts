export interface Question {
    questionId: string,
    answer: {
        questionType: string,
        answered: boolean,
    },
    questionType: number,
    questionText: string,
    questionCategory: string
}