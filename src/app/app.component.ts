import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from './services/categories.service';
import { Category } from './shared/category';
import { MenuItem } from './shared/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'it-academy';

  menuItems: MenuItem[];
  categories$: Observable<Category[]>;
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.menuItems = [
      {
        path: '/home',
        title: 'Home',
      },
      {
        path: '/about',
        title: 'About',
      },
      {
        path: '/authors',
        title: 'Authors',
      },
      {
        path: '/users',
        title: 'Users',
      },
      {
        path: '/posts/add',
        title: 'Write a post',
      },
      {
        path: 'add/user',
        title: 'Add New User',
      },
    ];
    this.categories$ = this.categoriesService.getCategories();
  }
}
