
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Quiz } from './business/models/quiz.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { Component, Signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Front.Ynov.QuizYnov';
}