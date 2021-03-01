import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../post.service';
import { CommentService } from '../services/comment.service';
import { Post } from '../shared/post';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
})
export class CommentListComponent implements OnInit {
  comments$: Observable<Comment[]>;
  @Input() post: Post;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.comments$ = this.postService.getPostComments(this.post);
  }
}
