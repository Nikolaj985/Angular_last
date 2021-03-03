import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';
import { Category } from './shared/category';
import { Comment } from './shared/comment';
import { Post } from './shared/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  loadPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('/api/posts');
  }

  validateName(name): Observable<boolean> {
    return this.httpClient
      .get<unknown>(`https://empty-poetry-bf01.akademija.workers.dev/${name}`)
      .pipe(
        mapTo(true),
        catchError(() => of(false))
      );
  }
  getRecentPosts(limit): Observable<Post[]> {
    const opts = {
      params: new HttpParams({
        fromString: '_sort=created&_order=desc&_limit=' + limit,
      }),
    };
    return this.httpClient.get<Post[]>('/api/posts', opts);
  }

  getPostComments(id: string): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`/api/posts/${id}/comments`);
  }

  getMostViewedPosts(limit): Observable<Post[]> {
    const opts = {
      params: new HttpParams({
        fromString: '_sort=views&_order=desc&_limit=' + limit,
      }),
    };
    return this.httpClient.get<Post[]>('/api/posts', opts);
  }

  addPost(post: Post): Observable<Post> {
    return this.httpClient.post<Post>('/api/posts', post);
  }

  getPost(id): Observable<Post | undefined> {
    return this.httpClient.get<Post>(`/api/posts/${id}`);
    // .pipe(map((posts) => posts.find((post) => post.id === id)));
  }

  addLike(post: Post): Observable<Post> {
    return this.httpClient.put<Post>(`/api/posts/${post.id}`, {
      ...post,
      likes: post.likes + 1,
    });
  }
  removeLike(post: Post): Observable<Post> {
    return this.httpClient.put<Post>(`/api/posts/${post.id}`, {
      ...post,
      likes: post.likes - 1,
    });
  }
}
