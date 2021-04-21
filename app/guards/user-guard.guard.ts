import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../services/user';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {
  constructor(
    public authService: UserAuthService,
    public router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean> | boolean{
      const currentuser = this.authService.currentUserValue;
    if (currentuser) {
      return true;
  }

  this.router.navigate(['/signIn'],{queryParams: {returnUrl: state.url}});
  return false;
}
}
