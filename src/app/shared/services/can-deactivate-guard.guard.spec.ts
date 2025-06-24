// import { TestBed } from '@angular/core/testing';
// import { CandeactivateGuard, FormCanDeactivate } from './can-deactivate-guard.guard';
// import { Observable, Observer, Subject, of } from 'rxjs';
// import { DialogService } from './dialog.service';
// import { MatDialogModule } from '@angular/material/dialog';
// let value = true;

// class MockDialogService {
//   openDialog(data) {
//     return {
//       afterClosed() {
//         return of(true);
//       },
//     };
//   }
// }

// class MockClass implements FormCanDeactivate {
//   returnValue: boolean | Observable<boolean>;
//   canDeactivate(): boolean {
//     if (value) {
//       return false;
//     }
//     else {
//       return true;
//     }
//   }
// }

// fdescribe('CanDeactivateGuardGuard', () => {
//   let guard;
//   let mockClass: MockClass;
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [MatDialogModule],
//       providers: [CandeactivateGuard,
//         { provide: DialogService, useClass: MockDialogService },
//         MockClass
//       ]
//     });
//     guard = TestBed.inject(CandeactivateGuard);
//     mockClass = TestBed.inject(MockClass);
//   });

//   it('should be created', () => {
//     expect(guard).toBeTruthy();
//   });

//   it('should call canDeactivate', () => {
//     value = true;
//     const canActive = <Observable<boolean>>(
//       guard.CandeactivateGuard(mockClass)
//     );
//     canActive.subscribe((deactivate) => {
//       expect(deactivate).toBeDefined();
//     })
//   })

//   it('should call candeactivate else', () => {
//     value = false;
//     guard.CandeactivateGuard(mockClass)
//   })
// });
