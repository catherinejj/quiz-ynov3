import { QuizMapper } from './../mapper/quiz-mapper.mapper';
import { QuizDto } from '../dtos/quiz-dto.dto';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import { Quiz } from '../models/quiz.model';

@Injectable({ providedIn: 'root' })
export class QuizService {

    constructor(
      private readonly mapper: QuizMapper,
      private readonly client: HttpClient,
    ){}
    //.get<QuizDto[]>('http://localhost:5001/weatherforecast')
    public list(): Observable<Quiz[]> {
      return this.client
        .get<QuizDto[]>('http://localhost:5001/api/quiz').pipe(map((dtos) => dtos.map((dto) => this.mapper.fromDto(dto))));
    }
}
