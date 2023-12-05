export interface Question {
    questionId: number,
    answer: {
        answered: boolean,
    },
    questionType: number,
    questionText: string,
    questionCategoryId: number
}