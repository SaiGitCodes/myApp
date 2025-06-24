// import { TestBed } from '@angular/core/testing';

// import { LoginGuard } from './login.guard';
// import { AuthService } from './auth.service';
// import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// class MockAuthService {
//   onLogout() {

//   }
// }

// fdescribe('LoginGuard', () => {
//   let guard = LoginGuard;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         LoginGuard,
//         { provide: AuthService, useClass: MockAuthService }
//       ]
//     });
//     guard = TestBed.inject(LoginGuard);
//   });

//   it('should be created', () => {
//     expect(guard).toBeTruthy();
//   });

//   it('should call for logout', () => {
//     let route: ActivatedRouteSnapshot;
//     let state: RouterStateSnapshot
//     guard.CanActivateFn(route, state);
//     expect(guard.CanActivateFn).toBeDefined();
//   })
// });
