import { Injectable } from "@angular/core";
import { QuizDto } from "../dtos/quiz-dto.dto";
import { Quiz } from "../models/quiz.model";

@Injectable({ providedIn: 'root' })
export class QuizMapper {

// Fonction pour convertir un objet de type `Quiz` en un objet de type `QuizDto`
public toDto(data: Quiz): QuizDto {
    // Retourne un nouvel objet `QuizDto` basé sur les propriétés de l'objet `Quiz` reçu.
    return {
      // Convertit la date en une chaîne lisible (format local)
      publishedDate: data.publishedDate.toLocaleDateString(),
      id: data.id,
      category: { id: data.category.id, name: data.category.name },
      description: data.description,
      difficulty: data.difficulty,
      name: data.name
    };
  }

  // Fonction pour convertir un objet de type `QuizDto` en un objet de type `Quiz`
  public fromDto(dto: QuizDto): Quiz {
    // Retourne un nouvel objet `Quiz` basé sur les propriétés de l'objet `QuizDto` reçu.
    return {
      // Convertit la chaîne de caractères représentant la date en un objet `Date`
      publishedDate: new Date(dto.publishedDate),
      id: dto.id,
      category: dto.category
        ? { id: dto.category.id, name: dto.category.name || 'Catégorie inconnue' } // Si category existe
        : { id: 'unknown', name: 'Catégorie inconnue' }, // Si category est null, on met une valeur par défaut
      description: dto.description,
      difficulty: dto.difficulty,
      name: dto.name
    };
  }
}
