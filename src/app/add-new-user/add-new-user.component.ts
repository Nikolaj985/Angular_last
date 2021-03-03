import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss'],
})
export class AddNewUserComponent implements OnInit {
  addNewUserForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.addNewUserForm = this.fb.group({
      userName: [
        '',
        { validators: [Validators.required, Validators.maxLength(30)] },
      ],
      userSurname: [
        '',
        { validators: [Validators.required, Validators.maxLength(30)] },
      ],
      userImage: [
        '',
        { validators: [Validators.required, Validators.maxLength(300)] },
      ],
      userEmail: [
        '',
        { validators: [Validators.required, Validators.maxLength(30)] },
      ],
    });
  }

  get userName() {
    return this.addNewUserForm.get('userName');
  }
  get userSurname() {
    return this.addNewUserForm.get('userSurname');
  }
  get userImage() {
    return this.addNewUserForm.get('userImage');
  }
  get userEmail() {
    return this.addNewUserForm.get('userEmail');
  }

  createUser() {
    const user: User = {
      img: this.userImage.value,
      imgFull: this.userImage.value,
      firstName: this.userName.value,
      lastName: this.userSurname.value,
      email: this.userEmail.value,
    };
    this.userService.addNewUser(user).subscribe();
    this.addNewUserForm.reset();
  }
}
