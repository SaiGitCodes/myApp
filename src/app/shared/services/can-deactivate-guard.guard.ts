
// import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';

// export const CandeactivateGuard: CanDeactivateFn<unknown> = (component: unknown,
//   currentRoute: ActivatedRouteSnapshot,
//   currentState: RouterStateSnapshot,
//   nextState: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
//   return true;
// };


import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Observer, filter } from 'rxjs';
import { DialogService } from './dialog.service';
import { inject } from '@angular/core';

export abstract class FormCanDeactivate {

  abstract CandeactivateGuard(): boolean;
}

export const CandeactivateGuard: CanDeactivateFn<unknown> =
  (component: FormCanDeactivate): Observable<boolean> | boolean => {
    console.log('component: ', component);
    const dialogservice = inject(DialogService);
    if (!component.CandeactivateGuard()) {
      return new Observable((observer: Observer<boolean>) => {
        const dialogRef = dialogservice.openConfirmationDialog("You have unsaved changes..!Are you sure to leave this page?");
        dialogRef.afterClosed().pipe(filter((result: boolean) => {
          return result;
        })).subscribe((res) => {
          observer.next(true);
          observer.complete();
        });
      });
    }
    else {
      return true;
    }
  };
