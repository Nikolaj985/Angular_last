import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserServiceService } from '../services/user.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  activeId$: Observable<string>;
  user$: Observable<User>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserServiceService
  ) {}

  ngOnInit(): void {
    this.activeId$ = this.activatedRoute.paramMap.pipe(
      map((paramMap) => paramMap.get('id'))
    );

    this.user$ = this.activeId$.pipe(
      switchMap((id) => this.userService.getUser(id))
    );
  }
}
