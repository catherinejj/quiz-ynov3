import { Injectable } from "@angular/core";
import { QuizDto } from "../dtos/quiz-dto.dto";
import { Quiz } from "../models/quiz.model";

@Injectable({ providedIn: 'root' })
export class QuizMapper {

public toDto(data: Quiz): QuizDto {
    return {
      publishedDate: data.publishedDate.toLocaleDateString(),
      id: data.id,
      category: data.category,
      description: data.description,
      difficulty: data.difficulty,
      name: data.name
    };
  }


  public fromDto(dto: QuizDto): Quiz {
    return {
      publishedDate: new Date(dto.publishedDate),
      id: dto.id,
      category: dto.category,
      description: dto.description,
      difficulty: dto.difficulty,
      name: dto.name
    };
  }
}
