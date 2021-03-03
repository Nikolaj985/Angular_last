import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tap, switchMap, map } from 'rxjs/operators';
import { PostService } from '../post.service';
import { Comment } from '../shared/comment';
import { Post } from '../shared/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  postId: string;
  post$: Observable<Post>;
  post: Post;
  comments$: Observable<Comment[]>;
  activeId$: Observable<string>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    // this.activeId$ = this.activatedRoute.paramMap.pipe(
    //   switchMap((params: ParamMap) => params.get('id'))
    // );

    this.activeId$ = this.activatedRoute.paramMap.pipe(
      map((paramMap) => paramMap.get('id'))
    );

    this.post$ = this.activeId$.pipe(
      switchMap((id) => this.postService.getPost(id))
    );

    this.comments$ = this.activeId$.pipe(
      switchMap((id) => this.postService.getPostComments(id))
    );
  }

  addLike(post: Post): void {
    this.postService.addLike(post).subscribe();
  }

  removeLike(post: Post): void {
    this.postService.removeLike(post).subscribe();
  }
  deletePost(id: string) {
    this.postService.deletePost(id).subscribe();
  }
}
