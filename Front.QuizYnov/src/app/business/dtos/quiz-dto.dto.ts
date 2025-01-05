import { Category } from '../models/category.model';
export interface QuizDto {
  publishedDate : string,
  id : string,
  category : Category,
  description : string,
  difficulty : number,
  name : string
}

