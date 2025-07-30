import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl = 'http://localhost:3000/news';
  constructor(private http: HttpClient) {}
}
