import { QuestionOption } from './QuestionOption';

export interface Question {
    id: string;
    desc: string;
    option: Array<QuestionOption>;
}