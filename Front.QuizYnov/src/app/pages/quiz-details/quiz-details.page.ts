import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // Nécessaire pour le pipe date
import { Quiz } from '../../business/models/quiz.model';
import { QuizService } from '../../business/services/quiz-service.service';
import { CategoryService, Category } from '../../business/services/category-service.service';

@Component({
  selector: 'app-quiz-details',
  standalone: true,
  imports: [CommonModule], // Ajout de CommonModule pour les pipes Angular comme 'date'
  templateUrl: './quiz-details.page.html',
  styleUrls: ['./quiz-details.page.scss'],
})
export class QuizDetailsPage {
  public quizzes: Quiz[] = []; // Liste contenant uniquement le quiz sélectionné
  public categories: Category[] = []; // Liste des catégories

  constructor(
    private route: ActivatedRoute, // Pour récupérer l'ID dans l'URL
    private quizService: QuizService, // Service pour obtenir les données des quiz
    private categoryService: CategoryService // Service pour les catégories
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID depuis l'URL
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID récupéré depuis l’URL :', id); // Vérifie l'ID

    if (id) {
      // Récupération des catégories
      this.categoryService.list().subscribe((categories) => {
        console.log('Catégories reçues du back-end :', categories); // Log les catégories
        this.categories = categories;

        // Récupération des quiz
        this.quizService.list().subscribe((quizzes) => {
          console.log('Quiz reçus du back-end :', quizzes); // Log les quiz

          // Filtrer le quiz correspondant à l'ID
          const selectedQuiz = quizzes.find((quiz) => quiz.id === id);
          console.log('Quiz correspondant à l’ID :', selectedQuiz); // Vérifie si un quiz est trouvé

          if (selectedQuiz) {
            // Associer le nom de la catégorie au quiz sélectionné
            const category = this.categories.find((cat) => cat.id === selectedQuiz.category.id);
            console.log('Catégorie trouvée pour le quiz :', category); // Vérifie la catégorie trouvée

            selectedQuiz.category.name = category ? category.name : 'Catégorie inconnue';

            // Ajouter le quiz à la liste `quizzes` pour le rendre compatible avec `@for`
            this.quizzes = [selectedQuiz];
            console.log('Quiz après association des catégories :', this.quizzes); // Log après association
          } else {
            console.log('Aucun quiz trouvé correspondant à cet ID.'); // Si aucun quiz n'est trouvé
          }
        });
      });
    }
  }
}
