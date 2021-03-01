import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Author } from '../shared/author';
import { Post } from '../shared/post';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(private httpClient: HttpClient) {}

  getAuthors(): Observable<Author[]> {
    return this.httpClient.get<Author[]>('/api/authors');
  }

  getAuthor(id): Observable<Author> {
    return this.httpClient.get<Author>(`/api/authors/${id}`);
  }

  getAuthorPosts(id): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`/api/authors/${id}/posts`);
  }
}
