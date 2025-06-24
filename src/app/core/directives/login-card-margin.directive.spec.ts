import { ElementRef, Renderer2 } from '@angular/core';
import { LoginCardMarginDirective } from './login-card-margin.directive';
import { TestBed } from '@angular/core/testing';


let elementrefvalue = {
  nativeElement: {
    getBoundingClientRect() {
      return 100;
    }
  }
}

class MockRenderer2 {
  setStyle() { }
}

fdescribe('LoginCardMarginDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginCardMarginDirective
      ],
      providers: [
        LoginCardMarginDirective,
        { provide: ElementRef, useValue: elementrefvalue },
        { provide: Renderer2, useClass: MockRenderer2 }
      ]
    });
  });

  test('should create an instance', () => {
    const directive = TestBed.get(LoginCardMarginDirective);
    expect(directive).toBeTruthy();
  });
  test('should cover ngonInit', () => {
    const directive = TestBed.get(LoginCardMarginDirective);
    directive.ngOnInit();
    expect(directive.ngOnInit).toBeDefined();
  })
});
