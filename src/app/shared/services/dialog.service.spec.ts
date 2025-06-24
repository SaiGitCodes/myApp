import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from './dialog.service';

class MockMatDialog {
  open() {
    return ({})  //not needed
  }
}

fdescribe('DialogService', () => {
  let service: DialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MatDialog, useClass: MockMatDialog }
      ]
    });
    service = TestBed.inject(DialogService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('call for openConfirmationDialog', () => {
    service.openConfirmationDialog('dsfghdjmhgfdfgf');
    expect(service.openConfirmationDialog).toBeDefined();
  });
});
