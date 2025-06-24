import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


export const AccessGuard: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {

  const rr = inject(Router);
  const routeArray = [
    { id: 1, routeName: '/app/extable' },
    { id: 2, routeName: '/app/FAQs' },
    { id: 3, routeName: '/app/story' },
    { id: 4, routeName: '/app/highlight' },
    { id: 5, routeName: '/app/change-password' },
  ]

  console.log('requested url ', state.url);
  //commented for backend calls
  // const index = routeArray.findIndex(x => x.routeName == state.url);
  // if (index != -1) {
  //   return true;
  // }
  // // else {
  // //   return false;
  // // }
  // else {
  //   alert('You are not permitted to access this page!');
  //   rr.navigate(['/login']);
  //   return false;
  // }
  return true;
};
