import { QuestionType } from "../types/QuestionType";
import { baseAxios } from "./axios";

export async function getQuestionsByCategory(category: string): Promise<QuestionType[]> {
  const result = await baseAxios.get<QuestionType[]>(`/questions?categories=${category}`);
  return result.data;
}
