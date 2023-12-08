import { Question } from "./Question";

export interface Interview {
    Id: string,
    FormType: string,
    Questions: Question[],

}