import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { MAT_DIALOG_DATA, matDialogAnimations } from '@angular/material/dialog';

class MockMAT_DIALOG_DATA {

}

fdescribe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useClass: MockMAT_DIALOG_DATA }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  let checked;
  test('should call for yes', () => {
    component.checked = true;
    component.onYes();
    component.checked = false;
    component.onYes();
    expect(component.onYes).toBeDefined();
  })
});
