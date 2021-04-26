import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserAuthService } from './../../services/user-auth.service';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent {
/*  currentUser: any;
  users = [];

  constructor(
    private authService: UserAuthService,
        private userService: UserService
  ) { 
    this.currentUser = this.authService.currentUserValue;
  }
 
  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.userService.getAll()
        .pipe(first())
        .subscribe(users => this.users = users);
}*/
}
