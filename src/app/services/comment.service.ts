import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Comment } from '../shared/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  getCommentsPost(post): Observable<Comment[]> {
    // const opts = {
    //   params: new HttpParams({
    //     fromString: '_sort=created&_order=asc',
    //   }),
    // };
    return this.httpClient.get<Comment[]>('/api/comments');
  }
  addNewComment(comment: Comment) {
    return this.httpClient.post('/api/comments', comment);
  }
}
