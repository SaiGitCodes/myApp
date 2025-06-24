import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { AuthService } from 'src/app/auth/services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

let res = false;
class MockAuthService {
  message = new BehaviorSubject<any>({
    VERIFIED: 'Verified',
    CORRECTION: 'Needs Correction',
    GOTIT: 'Got test!',
    NOTED: 'Noted',
    ALERT: 'Alert'
  });

}

fdescribe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      providers: [
        { provide: AuthService, useClass: MockAuthService }
      ],
      imports: [MaterialModule, BrowserAnimationsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should call on Success', () => {
    component.Success();
    expect(component.Success).toBeDefined();
  })

  test('should call on Default', () => {
    component.Default();
    expect(component.Default).toBeDefined();
  })

  test('should call on Error', () => {
    component.Error();
    expect(component.Error).toBeDefined();
  })

  test('should call on Information', () => {
    component.Information();
    expect(component.Information).toBeDefined();
  })

  test('should call on Warning', () => {
    component.Warning();
    expect(component.Warning).toBeDefined();
  })

  // test('should call on messages', () => {
  //   component.messages.ALERT();
  //   expect(component.messages.ALERT).toBeDefined();
  // })
});
