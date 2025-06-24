import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/auth/services/auth.service';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

let res = true;
let userDetails = { "token": "U2FsdGVkX19kP2nm4uPcEfVKT0iKerpsJTGGz25H++m1OjydJDCYeGwkr5blg4VWkFGNCiRoS/vDxqzIMznY+gdHiv9VrdpMQQOFkrfSfs2eH6KzfLId5+Ye+NyCN6AqWGet90OoAfrUkrxB0iy1EugiuupOO8/wLXjIwiWRAD9bZPqj6RAFREk2E0H14gCMkdgs2CgzRzu7/6k1YhaMijlqLVTxYjzIpvD0YJzqmh1Ru3i1hDGJABV+/s66odjS7OY4AzLPtJaVvXwkvEcKyA==", "refreshToken": "vgpKuAqpyGo4xKhLYxyiKBQcSeUGCJEa3iR2BZVdBRyJNQRiNPGM8gTwAUtMchb4YnLqKeycqarRenqwPt8InJZVNWXUl8ZeokpFEiGnuvrbfLLSqXNyQ5OUvDV27dwPNmUR24OCtkc3fsyr81vaj3NNTXYsIDmgkPqyI7N2zHqKL6tfApPNcpU33m3w6jU8Kv9Duz1LYHfAHTcuN9lECOTWX3pvjhomkGEa1gmbI5UZq7jhEzjzKEoxDCWsMRL2", "user": { "id": 4, "roleId": 2, "designationId": 3, "firstName": "bbb", "lastName": "ccc", "email": "bbb@gmail.com", "alternateEmail": "bbb@gmail.com", "dateOfBirth": "2023-04-14T18:30:00.000Z", "dateOfJoin": "2023-04-28T18:30:00.000Z", "created": "2023-04-24T11:05:16.000Z", "modified": "2023-04-24T11:05:16.000Z" }, "success": true }

class MockAuthService {
  signIn() {
    if (res) {
      return of(userDetails)
    }
    else {
      return throwError({ error: { error: { error: 'test' } } })
    }
  }

  message = new BehaviorSubject<any>(null)

}

class MockRouter {
  navigate(url: string) {
    return url;
  }
}

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: Router, useClass: MockRouter }
      ],
      imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, BrowserAnimationsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });


  test('should call on signIn', () => {
    component.signinForm.setValue({
      email: 'aaa@gmail.com',
      password: '111'
    });
    component.signIn();
    res = false;
    component.signIn();
    expect(component.signIn).toBeDefined();
  });
});