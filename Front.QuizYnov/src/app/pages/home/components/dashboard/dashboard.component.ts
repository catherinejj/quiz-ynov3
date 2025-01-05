import { Quiz } from './../../../../business/models/quiz.model';
import { Component } from '@angular/core';
import { QuizService } from '../../../../business/services/quiz-service.service';
import { CategoryService, Category } from '../../../../business/services/category-service.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
    public quizzes: Quiz[] = [];// Liste des quiz
    public categories: Category[] = [];
    constructor(private readonly quizService: QuizService, private readonly categoryService: CategoryService) {}
  ngOnInit(): void {
    // Récupération des catégories
    this.categoryService.list().subscribe((categories) => {
      console.log('Catégories reçues du back-end :', categories); // Log les catégories
      this.categories = categories;

      // Récupération des quiz
      this.quizService.list().subscribe((quizzes) => {
        console.log('Quiz reçus du back-end :', quizzes);
        // Log les quiz
        this.quizzes = quizzes.map((quiz) => {
          // Associer le nom de la catégorie
          const category = this.categories.find((cat) => cat.id === quiz.category.id);
          quiz.category.name = category ? category.name : 'Catégorie inconnue';
          return quiz;
        });
        console.log('Quiz après association des catégories :', this.quizzes); // Log après association
      });
    });
  }
}
