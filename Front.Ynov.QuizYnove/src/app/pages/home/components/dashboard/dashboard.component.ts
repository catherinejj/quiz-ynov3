import { Quiz } from './../../../../business/models/quiz.model';
import { Component } from '@angular/core';
import { QuizService } from '../../../../business/services/quiz-service.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
    public quizzes: Quiz[] = [];
    constructor(private readonly quizService: QuizService) {}
    ngOnInit(): void {
      this.quizService.list().subscribe((quizzes) => {
        this.quizzes = quizzes;
      });
    }
}
