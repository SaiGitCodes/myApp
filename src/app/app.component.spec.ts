import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthService } from './auth/services/auth.service';
import { HeaderService } from './core/services/header.service';

class MockAuthService {
  getMessage() {

  }
}
class MockHeaderService {
  setHeaders() {

  }
}

fdescribe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CoreModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: HeaderService, useClass: MockHeaderService }
      ]
    }).compileComponents();
  });

  test('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  test(`should have as title 'myApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('myApp');
  });

  test('should have as ngOnInit', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('myApp');
  });

  // test('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('myApp app is running!');
  // });

  test('should call for OnInit', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    expect(app.ngOnInit).toBeDefined();
  });

  test('should call onClick', () => {
    let show = true;
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.onclick();
    expect(app.onclick).toBeDefined();
  })
});
