import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, filter, switchMap, take, throwError } from 'rxjs';
import { HeaderService } from './header.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {
  isRefreshingToken: boolean;
  refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private headerservice: HeaderService,
    private authservice: AuthService,
    private router: Router) { }

  /**
   * 
   * @param request 
   * @param next 
   * @returns 
   */

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // console.log('request in intercept: ', request);
    // console.log('next in intercept: ', next);

    return next.handle(this.setHeaders(request)).pipe(catchError((err) => {
      if (err instanceof HttpErrorResponse && err.status === 401) {
        return this.handleError(request, next);
      }
      return throwError(err);
    }));
  }

  /**
   * 
   * @param request 
   * @param next 
   * @returns 
   */
  private handleError(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshingToken) {
      // console.log('refToken :', this.isRefreshingToken)
      this.isRefreshingToken = true;
      this.refreshTokenSubject.next(null);
      return this.authservice
        .getRefreshToken().pipe(switchMap((token: any) => {
          this.isRefreshingToken = false;
          this.refreshTokenSubject.next(token['accessToken']);
          this.headerservice.setHeaders('default', 'Authorization', token['accessToken']);
          sessionStorage.setItem('token', token['accessToken']);
          return next.handle(this.setHeaders(request));
        }), catchError((err: any) => {
          this.isRefreshingToken = false;
          this.router.navigate(['/login']);
          return throwError(err);
        }));
    } else {
      return this.refreshTokenSubject.pipe(filter(token => token !== null),
        take(1),
        switchMap((jwtToken) => next.handle(this.setHeaders(request)))
      );
    }
  }

  /**
   * 
   * @param request 
   * @returns 
   */
  setHeaders(request: HttpRequest<any>) {
    console.log('setHeaders Interceptors: ', request.url);
    const headers = this.headerservice.getHeaders(request.url);
    return headers ? request.clone({
      setHeaders: headers
    }) : request;
  }
}
