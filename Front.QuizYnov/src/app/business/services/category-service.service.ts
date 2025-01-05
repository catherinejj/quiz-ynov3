import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Category {
  id: string;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private readonly baseUrl = 'http://localhost:5001/api/categories';

  constructor(private readonly client: HttpClient) {}

  public list(): Observable<Category[]> {
    return this.client.get<Category[]>(this.baseUrl);
  }
}
