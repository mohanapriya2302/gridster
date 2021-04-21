import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { first } from 'rxjs/operators';
import { UserAuthService } from './../../services/user-auth.service';
import { UserService } from './../../services/user.service';
//import { sidebar } from './../sidebar/sidebar.component';
@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: any;
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

    deleteUser(id: number) {
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
            alert('Deleted successfully');
    }

    updateUser(value: any) {
        this.userService.update(value)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
            alert('Updated successfully');
    }

    private loadAllUsers() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }
}