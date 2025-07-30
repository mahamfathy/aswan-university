import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsItem } from '../interfaces/news-item.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl = 'http://localhost:3000/news';
  constructor(private http: HttpClient) {}
  getNews() {
    return this.http.get<NewsItem[]>(this.apiUrl);
  }
  addNews(news: NewsItem) {
    return this.http.post<NewsItem>(this.apiUrl, news);
  }
  editNews(news: NewsItem) {
    return this.http.put<NewsItem>(`${this.apiUrl}/${news.id}`, news);
  }
  deleteNews(news: NewsItem) {
    return this.http.delete<NewsItem>(`${this.apiUrl}/${news.id}`);
  }
}
