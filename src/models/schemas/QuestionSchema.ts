export interface QuestionSchema {
  id: number;
  text: string;
  categoryId: number;
  info?: string;
  description?: string;
  options?: any;
}
