import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';


export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const authService = inject(AuthService);
  const rr = inject(Router);
  const header = inject(HeaderService);
  if (authService.isAuthenticated()) {
    // console.log('token is there');
    const token = authService.getToken();
    if (token) {
      header.setHeaders('default', 'Authorization', token);
    }
    return true;
  }
  else {
    // console.log('token is not there');
    rr.navigate(['/login']);
    return false;
  }
};

