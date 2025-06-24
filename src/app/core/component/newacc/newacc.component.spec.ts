import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewaccComponent } from './newacc.component';

fdescribe('NewaccComponent', () => {
  let component: NewaccComponent;
  let fixture: ComponentFixture<NewaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewaccComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
