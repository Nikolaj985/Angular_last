import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  removeLike(user: User) {}

  addLike(user: User) {}
  deleteUser(id: string): void {
    this.userService.deleteUser(id).subscribe();
  }
}
