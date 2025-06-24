import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';

fdescribe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should onChanges', () => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    component.ngOnChanges();
    expect(component.ngOnChanges).toBeDefined();
  })
});
