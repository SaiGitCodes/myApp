import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import { ChildComponent } from '../child/child.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

fdescribe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentComponent, ChildComponent],
      imports: [MatInputModule, FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should create onChanges', () => {
    component.ngOnChanges({});
    expect(component.ngOnChanges).toBeTruthy();
  });
});
