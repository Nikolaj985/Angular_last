import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../services/comment.service';
import { Post } from '../shared/post';
import { Comment } from '../shared/comment';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
})
export class CommentFormComponent implements OnInit {
  addNewCommentForm: FormGroup;
  comment: Comment;
  @Input() post: Post;

  constructor(
    private fb: FormBuilder,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.addNewCommentForm = this.fb.group({
      commentAuthor: [
        '',
        { validators: [Validators.required, Validators.maxLength(20)] },
      ],
      commentContent: [
        '',
        { validators: [Validators.required, Validators.maxLength(1000)] },
      ],
    });
  }

  get commentAuthor() {
    return this.addNewCommentForm.get('commentAuthor');
  }
  get commentContent() {
    return this.addNewCommentForm.get('commentContent');
  }

  createComment(post) {
    const comment: Comment = {
      userId: this.commentAuthor.value,
      postId: post.id,
      content: this.commentContent.value,
      created: Date.now(),
    };
    this.commentService.addNewComment(comment).subscribe();
    this.addNewCommentForm.reset();
  }
}
