import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsItem } from '../interfaces/news-item.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl = 'http://localhost:3000/news';

  constructor(private http: HttpClient) {}

  getNews(): Observable<NewsItem[]> {
    return this.http.get<NewsItem[]>(this.apiUrl);
  }

  addNews(news: NewsItem): Observable<NewsItem> {
    return this.http.post<NewsItem>(this.apiUrl, news);
  }

  editNews(id: number, news: NewsItem): Observable<NewsItem> {
    return this.http.put<NewsItem>(`${this.apiUrl}/${id}`, news);
  }

  deleteNews(id: number): Observable<NewsItem> {
    return this.http.delete<NewsItem>(`${this.apiUrl}/${id}`);
  }
}
