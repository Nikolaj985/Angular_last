import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ActionSequence } from 'protractor';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { PostService } from '../post.service';
import { CommentService } from '../services/comment.service';
import { Comment } from '../shared/comment';
import { Post } from '../shared/post';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
})
export class CommentListComponent implements OnInit {
  comments$: Observable<Comment[]>;
  @Input() post: Post;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.comments$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get('id');
        return this.postService.getPostComments(id).pipe(
          tap((comments) => {
            comments.sort((x, y) => (x.created > y.created ? -1 : 1));
          })
        );
      })
    );
  }
  deleteComment(id: string) {
    this.commentService.deleteComment(id).subscribe();
  }
}
