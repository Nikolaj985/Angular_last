import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../post.service';
import { Post } from '../shared/post';

@Component({
  selector: 'app-mostviewedposts',
  templateUrl: './mostviewedposts.component.html',
  styleUrls: ['./mostviewedposts.component.scss'],
})
export class MostviewedpostsComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getMostViewedPosts(5);
  }
}
