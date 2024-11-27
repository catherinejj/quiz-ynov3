import { QuizDetailsPage } from './pages/quiz-details/quiz-details.page';
import { HomePage } from './pages/home/home.page';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '',component: HomePage,},
  {path: 'quiz/:id',component: QuizDetailsPage,},
];
