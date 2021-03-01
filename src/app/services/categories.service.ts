import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../shared/category';
import { Post } from '../shared/post';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>('/api/categories');
  }

  getCategory(id): Observable<Category | undefined> {
    return this.httpClient.get<Category>(`/api/categories/${id}`);
    // .pipe(map((posts) => posts.find((post) => post.id === id)));
  }

  getCategoryPosts(id): Observable<Post[] | undefined> {
    return this.httpClient.get<Post[]>(`/api/categories/${id}/posts`);
    // .pipe(map((posts) => posts.find((post) => post.id === id)));
  }
}
