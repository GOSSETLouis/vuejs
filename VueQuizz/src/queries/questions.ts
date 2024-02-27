import { QuestionType } from "../types/QuestionType";
import { baseAxios } from "./axios";

export async function getQuestionsByCategory(category: string) {
  const result = await baseAxios.get<QuestionType[]>(
    `/questions?categories=${category}&difficulties=easy`
  );
  return result.data;
}
