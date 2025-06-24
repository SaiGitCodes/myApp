import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleComponent } from './role.component';
import { HttpService } from 'src/app/auth/services/http.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SnackService } from 'src/app/shared/services/snack.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BehaviorSubject, of } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { DialogService } from 'src/app/shared/services/dialog.service';


let role = [{
  id: 2,
  name: "Administrator",
  created: "2023-04-19T09:30:00.000Z",
  modified: "2023-04-19T09:30:00.000Z"
}]

let res = true;
let data = 'sdfghj';
let roleres = {
  addRole: {
    created: "2023-05-22T11:02:11.409Z",
    modified: "2023-05-22T11:02:11.409Z",
    id: 32,
    name: "General Manager"
  }
};

class MockHttpService {
  getRole() {
    // if (res) {
    return of(role)
    // }
  }

  postRole() {
    return of(roleres);
  }

  deleteRole() {
    return of({ "deleterole": 1, "success": true })
  }

  updateRole() {
    return of({ "updatefinal": [1], "success": true })
  }
}

class MockDialogService {
  openConfirmationDialog() {
    return {
      afterClosed() {
        return of({})
      }
    }
  }
}

class MockMatDialog {
  open() {
    return {
      afterClosed() {
        return of({})
      }
    }
  }
}

class MockAuthService {

  message = new BehaviorSubject<any>(
    {
      DATA_SAVED: 'SDFGHJNM',
      DELETE: "Are you sure you want to delete?",
    }
  );

}

class MockSnackService {
  clickmesnack() {

  }
}

fdescribe('RoleComponent', () => {
  let component: RoleComponent;
  let fixture: ComponentFixture<RoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoleComponent],
      providers: [
        { provide: HttpService, useClass: MockHttpService },
        { provide: MatDialog, useClass: MockMatDialog },
        { provide: AuthService, useClass: MockAuthService },
        { provide: SnackService, useClass: MockSnackService },
        { provide: DialogService, useClass: MockDialogService }
      ],
      imports: [MatFormFieldModule, ReactiveFormsModule, MatTableModule, MatInputModule, BrowserAnimationsModule, MatPaginatorModule, MatSortModule]

    })
      .compileComponents();

    fixture = TestBed.createComponent(RoleComponent);
    component = fixture.componentInstance;
    // component.needUpdate = { name: null, id: '' };
    fixture.detectChanges();
    // component.name = new FormControl('vbnm');
    component.ELEMENT_DATA = role;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should cover onInit', () => {
    component.ngOnInit();
    res = false;
    component.ngOnInit();
    expect(component.ngOnInit).toBeDefined();
  });

  test('should call on Add', () => {
    component.onAdd();
    expect(component.onAdd).toBeDefined();
  });

  test('should call on createRole', () => {
    // component.name = new FormControl('sdfghj');
    // component.onCreateRole();
    component.ELEMENT_DATA = [{ id: 1, name: '' }];
    component.onCreateRole();
    expect(component.onCreateRole).toBeDefined();
  });

  test('should cover onDelete', () => {
    const data = { id: 2 };
    component.onDelete(data);
    expect(component.onDelete).toBeDefined();
  });

  test('should cover onEdit', () => {
    const name = { name: 'dfghj' };
    component.needUpdate = { name: 'Janani', id: '' };
    component.onEdit(name);
    expect(component.onEdit).toBeDefined();
  })

  // test('should cover branches',()=>{
  //   component.update=true;

  // })
});
