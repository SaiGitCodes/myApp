import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, throwError } from 'rxjs';
import { HttprouteService } from './httproute.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<any>(null);
  message = new BehaviorSubject<any>(null);
  constructor(private http: HttprouteService,
    private router: Router) { }

  getMessage() {
    this.http.getjsonData('messages.json').subscribe(res => {
      console.log('Message: ', res);
      this.message.next(res);
    });
  }


  getToken(): string {
    // let token;
    // const currentUser = JSON.parse(sessionStorage.getItem('currentUserToken') || "");
    // if (currentUser) {
    //   token = currentUser.token;
    // }
    const currentUser = JSON.parse(sessionStorage.getItem('currentUserToken'));
    const token = currentUser ? currentUser.token : null;
    return token;
  }

  getRefreshToken(): any {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUserToken'));
    const refreshToken = currentUser ? currentUser.refreshToken : null;
    return this.http.postMethod('refreshToken', { refreshToken });
  }

  isAuthenticated() {
    let token;
    //stores the data in sessionstorage to this variable
    const currentUser = JSON.parse(sessionStorage.getItem('currentUserToken'));
    if (currentUser && currentUser.token) {
      token = currentUser.token;
      console.log('token', token);
      return token != null;
    }
    else {
      return false;
    }
  }

  onLogout() {
    // sessionStorage.removeItem('currentUserToken');
    // this.router.navigate(['/login']);
    return sessionStorage.removeItem('currentUserToken');
  }

  signIn(data: any) {
    console.log('inside signin')
    return this.http.postMethod('login', data).pipe(map((res: any) => {
      console.log('response sign in', res);
      if (res && res['user'] && res['token']) {
        console.log('signIn detailes:', res);
        this.user.next(res['user']);
        sessionStorage.setItem('currentUserToken', JSON.stringify({ token: res['token'], refreshToken: res['refreshToken'] }))
      }
      return res;
    }), catchError(err => {
      return throwError(err);
    }));
  }


}





