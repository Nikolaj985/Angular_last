import { Component, Input, OnInit } from '@angular/core';
import { AuthorsService } from '../services/authors.service';
import { Author } from '../shared/author';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss'],
})
export class AuthorDetailsComponent implements OnInit {
  @Input() author: Author;

  constructor(private authorsService: AuthorsService) {}

  ngOnInit(): void {}

  addLike(author) {}

  removeLike(author) {}
  deleteAuthor(id: string) {
    this.authorsService.deleteAuthor(id).subscribe();
  }
}
