import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthorsService } from '../services/authors.service';
import { Author } from '../shared/author';
import { Post } from '../shared/post';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.scss'],
})
export class AuthorPageComponent implements OnInit {
  author$: Observable<Author>;
  posts$: Observable<Post[]>;
  activeId$: Observable<string>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authorService: AuthorsService
  ) {}

  ngOnInit(): void {
    this.activeId$ = this.activatedRoute.paramMap.pipe(
      map((paramMap) => paramMap.get('id'))
    );
    this.author$ = this.activeId$.pipe(
      switchMap((id) => this.authorService.getAuthor(id))
    );
    this.posts$ = this.activeId$.pipe(
      switchMap((id) => this.authorService.getAuthorPosts(id))
    );
  }
}
