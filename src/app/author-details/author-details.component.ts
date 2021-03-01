import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../shared/author';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss'],
})
export class AuthorDetailsComponent implements OnInit {
  @Input() author: Author;

  constructor() {}

  ngOnInit(): void {}

  addLike(author) {}

  removeLike(author) {}
}
