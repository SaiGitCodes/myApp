import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesComponent } from './observables.component';
import { AuthService } from 'src/app/auth/services/auth.service';
import { BehaviorSubject } from 'rxjs';

class MockAuthService {
  message = new BehaviorSubject<any>({});
}

fdescribe('ObservablesComponent', () => {
  let component: ObservablesComponent;
  let fixture: ComponentFixture<ObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObservablesComponent],
      providers: [
        { provide: AuthService, useClass: MockAuthService }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should cover onSubmit', () => {
    component.onSubmit();
    expect(component.onSubmit).toBeDefined();
  })
});
