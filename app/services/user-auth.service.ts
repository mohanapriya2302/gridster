import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {  } from './user';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

 /* endpoint: string = 'https://reqres.in/api/users/2';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};*/
  public currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;  
 

  constructor( private http: HttpClient,
    public router: Router) { 
      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue() {
      return this.currentUserSubject.value;
  }    

 
  signIn(email, password) {
    return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { email, password })
        .pipe(map(user => {
            
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
  
      }
logout() {
  localStorage.removeItem('currentUser');
  this.currentUserSubject.next(null);
}}
  /*getToken() {
    return localStorage.getItem('access_token');
  }

  getUserProfile(id): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
*/
