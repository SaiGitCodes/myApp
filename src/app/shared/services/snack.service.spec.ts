import { TestBed } from '@angular/core/testing';

import { SnackService } from './snack.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { snackenum } from 'src/app/core/models/snack.model';

class MockMatSnackBar {
  openFromComponent() {

  }
}

fdescribe('SnackService', () => {
  let service: SnackService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MatSnackBar, useClass: MockMatSnackBar }
      ]
    });
    service = TestBed.inject(SnackService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should call for a snackFunc', () => {
    const data = {
      msg: 'hi',
      content: snackenum.Success,
      duration: 3000,
      panelClass: 'Success',
      horizontalPosition: 'start',
      verticalPosition: 'end'
    }
    service.clickmesnack(data);
    const data1 = {
      msg: 'hi',
      content: snackenum.Success,
      duration: 3000,
      panelClass: 'Success',
      // horizontalPosition: 'start',
      // verticalPosition: 'end'
    }
    service.clickmesnack(data1);
    expect(service.clickmesnack).toBeDefined();
  })
});
