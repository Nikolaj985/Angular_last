import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthorsService } from '../services/authors.service';
import { Author } from '../shared/author';

@Component({
  selector: 'app-authors-page',
  templateUrl: './authors-page.component.html',
  styleUrls: ['./authors-page.component.scss'],
})
export class AuthorsPageComponent implements OnInit {
  authors$: Observable<Author[]>;

  constructor(private authorService: AuthorsService) {}

  ngOnInit(): void {
    this.authors$ = this.authorService.getAuthors();
  }
}
