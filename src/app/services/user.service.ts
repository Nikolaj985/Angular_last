import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  getUser(id): Observable<User> {
    return this.httpClient.get<User>(`api/users/${id}`);
  }
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`api/users`);
  }
  addNewUser(user: User) {
    return this.httpClient.post(`api/users`, user);
  }
}
