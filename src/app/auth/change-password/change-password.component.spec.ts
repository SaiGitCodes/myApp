import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordComponent } from './change-password.component';
import { PassvalidatorsService } from 'src/app/shared/services/passvalidators.service';
import { SnackService } from 'src/app/shared/services/snack.service';
import { HttpService } from '../services/http.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class MockPassvalidatorsService {
  validateAreEqual() {
    return
  }
}
class MockSnackService {

}
class MockHttpService {

}

fdescribe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangePasswordComponent],
      providers: [
        { provide: PassvalidatorsService, useClass: MockPassvalidatorsService },
        { provide: SnackService, useClass: MockSnackService },
        { provide: HttpService, useClass: MockHttpService }
      ],
      imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
