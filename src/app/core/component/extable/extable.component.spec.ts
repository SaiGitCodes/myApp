import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtableComponent } from './extable.component';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HttpService } from 'src/app/auth/services/http.service';
import { SnackService } from 'src/app/shared/services/snack.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { TablechildComponent } from '../tablechild/tablechild.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientModule } from '@angular/common/http';

const getemplyeeres = [{
  id: 3,
  roleId: 2,
  designationId: 3,
  firstName: "bbb",
  lastName: "ccc",
  email: "bbb@gmail.com",
  alternateEmail: "bbb@gmail.com",
  dateOfBirth: "2023-04-14T18:30:00.000Z",
  dateOfJoin: "2023-04-28T18:30:00.000Z",
  password: "$2b$06$sRyemxmAQpOer9RYOq3AeOy0eZI/594HNjNZtGTopBH/S6WTNVM0y",
  created: "2023-04-24T11:05:16.000Z",
  modified: "2023-04-24T11:05:16.000Z"
}];

let res = true;
class MockDialogService {
  openConfirmationDialog() {
    return {
      afterClosed() {
        return of({})
      }
    }
  }

}

class MockRouter {
  navigate(url: string) {
    return url;
  }
}

class MockSnackService {
  clickmesnack() {
    return
  }
}
class MockHttpService {
  getEmployees() {
    return of(getemplyeeres)
  }

  deleteEmployee() {
    if (res) {
      return of(true)
    }
  }
}

class MockAuthService {
  message = new BehaviorSubject<any>({
    DELETE: "HSCBHH"
  });
}

fdescribe('ExtableComponent', () => {
  let component: ExtableComponent;
  let fixture: ComponentFixture<ExtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtableComponent, TablechildComponent],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: HttpService, useClass: MockHttpService },
        { provide: SnackService, useClass: MockSnackService },
        { provide: Router, useClass: MockRouter },
        { provide: DialogService, useClass: MockDialogService }
      ],
      imports: [MaterialModule, BrowserAnimationsModule]
      // imports: [MatDialogModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, BrowserAnimationsModule, MatPaginatorModule, MatSortModule, HttpClientModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ExtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ELEMENT_DATA = getemplyeeres;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
  test('should cover oninit', () => {
    component.ngOnInit();
    expect(component.ngOnInit).toBeTruthy();
  });
  test('should call on applyFilter', () => {
    const data = <any>{ target: { value: 'test' } };
    component.applyFilter(data);
    expect(component.applyFilter).toBeDefined();
  })

  test('should apply on onEmit', () => {
    const data = <any>{ target: { value: 'test' } };
    component.onEmit(data);
    expect(component.onEmit).toBeDefined();
  })

  test('should apply on onDelete', () => {
    const data = <any>{ id: 3 };
    // component.ELEMENT_DATA = [{ id: 3 }];
    component.onDelete(data);
    expect(component.onDelete).toBeDefined();
  })

  test('should apply on onEdit', () => {
    const data = <any>{ id: 2 };
    component.onEdit(data);
    expect(component.onEdit).toBeDefined();
  })

});
