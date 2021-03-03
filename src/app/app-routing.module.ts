import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { AuthorPageComponent } from './author-page/author-page.component';
import { AuthorsPageComponent } from './authors-page/authors-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CommentComponent } from './comment/comment.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UsersPageComponent } from './users-page/users-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'posts/add', component: CreatePostComponent },
  { path: 'post/:id', component: PostDetailsComponent },
  { path: 'post/:id/comments', component: CommentComponent },
  { path: 'categories/:id', component: CategoryPageComponent },
  { path: 'categories/:id/posts', component: CategoryPageComponent },
  { path: 'authors', component: AuthorsPageComponent },
  { path: 'author/:id', component: AuthorPageComponent },
  { path: 'add/user', component: AddNewUserComponent },
  { path: 'users', component: UsersPageComponent },
  { path: 'user/:id', component: UserPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: "**", component: NotFoundComponent }
];

@NgModule({
  providers: [],
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
