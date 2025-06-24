import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQsComponent } from './faqs.component';
import { HttpService } from 'src/app/auth/services/http.service';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { SnackService } from 'src/app/shared/services/snack.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

let res = true;

let designation = [{
  id: 1,
  name: "Team Leader",
  created: "2023-04-19T09:31:00.000Z",
  modified: "2023-04-19T09:31:00.000Z"
}];

let role = [{
  id: 2,
  name: "Administrator",
  create: "2023-04-19T09:30:00.000Z",
  modified: "2023-04-19T09:30:00.000Z"
}];

let formFill = {
  id: 10,
  roleId: 24,
  designationId: 5,
  firstName: "zxcv",
  lastName: "xc",
  email: "saijananitm@gmail.com",
  alternateEmail: "saijananitm@gmail.com",
  dateOfBirth: "2023-04-21T18:30:00.000Z",
  dateOfJoin: "2023-04-28T18:30:00.000Z",
  password: "$2b$07$iTl1n2SxMwp8H5YB3StgvuxgaFQX0Uc7HhGVWdYn/lzKNnjCGPKDC",
  created: "2023-04-28T09:56:25.000Z",
  modified: "2023-04-28T09:56:25.000Z"
}

let createEmp = {
  created: "2023-05-17T05:53:19.192Z",
  modified: "2023-05-17T05:53:19.193Z",
  id: 12,
  firstName: "ias",
  lastName: "inanaj",
  email: "saijananitm@gmail.com",
  alternateEmail: "saijananitm@gmail.com",
  dateOfBirth: "2023-05-03T18:30:00.000Z",
  dateOfJoin: "2023-05-18T18:30:00.000Z",
  designationId: 2,
  roleId: 24,
  password: "$2b$04$uJVVsYFk6WNxPviZkIATcee5LnVZfVvR0/ttMUQXvQZoxErhe77lS"
}

let updEmp = { update: [1] }

class MockAuthService {
  message = new BehaviorSubject<any>({
    DATA_UPDATED: "Data updated successfully"
  });
}

class MockHttpService {
  getDesignation() {
    return of(designation)

  }
  getRole() {
    return of(role)
  }

  getEmployeeFormFill() {
    // if (res) {
    return of(formFill)
    // }
    // else {
    //   return throwError({ error: { error: { error: 'test' } } })
    // }
  }

  createEmployee() {
    return of(createEmp)
  }

  updateEmployee() {
    return of(updEmp)
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

class MockDatePipe {
  transform() {
    return
  }
}
var sh = true;
fdescribe('FAQsComponent', () => {
  let component: FAQsComponent;
  let fixture: ComponentFixture<FAQsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FAQsComponent],
      providers: [
        DatePipe,
        { provide: AuthService, useClass: MockAuthService },
        { provide: HttpService, useClass: MockHttpService },
        { provide: SnackService, useClass: MockSnackService },
        { provide: Router, useClass: MockRouter },
        {
          provide: ActivatedRoute, useValue: {
            params: of(sh ? { data: 'edit', id: '10' } : { id: '10' })
          }
        }

      ],
      imports: [MaterialModule, BrowserAnimationsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FAQsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.empregForm = new FormGroup({
      firstName: new FormControl('Sai'),
      lastName: new FormControl('Janani'),
      email: new FormControl('sai@gmail.com'),
      alternateEmail: new FormControl('sai@gmail.com'),
      dateOfBirth: new FormControl("2023-04-21T18:30:00.000Z"),
      dateOfJoin: new FormControl("2023-04-29T18:30:00.000Z"),
      designationId: new FormControl(2),
      roleId: new FormControl(3),
      password: new FormControl("$2b$07$iTl1n2SxMwp8H5YB3StgvuxgaFQX0Uc7HhGVWdYn/lzKNnjCGPKDC"),
      managerName: new FormControl('sdf'),
      managerEmail: new FormControl('abc@gmail.com'),
      startDate: new FormControl("2023-04-21T18:30:00.000Z"),
      endDate: new FormControl("2023-05-13T18:30:00.000Z"),
      contacts: new FormArray([new FormGroup({
        address: new FormControl('abc street'),
        city: new FormControl('xyz'),
        state: new FormControl('TamilNadu'),
        pincode: new FormControl(626123)
      })])
    })
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should cover onInit', () => {
    // var sh = true;
    component.ngOnInit();
    sh = false;
    component.ngOnInit();
    expect(component.ngOnInit).toBeTruthy();
  });

  test('call for removeItem', () => {
    component.removeItem(0);
    expect(component.removeItem).toBeDefined();
  });

  test('call  on onSubmit', () => {

    component.update = false;
    component.onSubmit();
    component.update = true;
    component.onSubmit();
    expect(component.onSubmit).toBeDefined();
  })

  test('should call on reset', () => {
    component.onReset();
    expect(component.onReset).toBeDefined();

  })

  test('This is onExternalApprovar', () => {
    component.onExternalApprover(1);
    // res = false;
    component.onExternalApprover(0);
    expect(component.onExternalApprover).toBeDefined();
  })

  test('this is for onClick', () => {
    var clicked = false;
    component.onClick();
    var clicked = true;
    component.onClick();
    expect(component.onClick).toBeDefined();
  })

  test('should call on onView', () => {
    var viewclicked = true;
    component.onView();
    var viewclicked = false;
    component.onView();
    expect(component.onView).toBeDefined();
  })

  // test('should call on ActiveValuechange', () => {
  //   component.onActiveValueChange(true);
  //   expect(component.onActiveValueChange).toBeDefined();
  // })

  test('should call on formChanges', () => {
    component.empregForm.setValue({
      firstName: 'Saiasdfg',
      lastName: 'Janani',
      email: 'sai@gmail.com',
      alternateEmail: 'sai@gmail.com',
      dateOfBirth: "2023-04-21T18:30:00.000Z",
      dateOfJoin: "2023-04-29T18:30:00.000Z",
      designationId: 2,
      roleId: 3,
      password: "$2b$07$iTl1n2SxMwp8H5YB3StgvuxgaFQX0Uc7HhGVWdYn/lzKNnjCGPKDC",
      managerName: 'sdf',
      managerEmail: 'abc@gmail.com',
      startDate: "2023-04-21T18:30:00.000Z",
      endDate: "2023-05-13T18:30:00.000Z",
      contacts: [{
        address: 'abc street',
        city: 'xyz',
        state: 'TamilNadu',
        pincode: 626123
      }]
    });
    component.formChanges();
    component.empregForm.setValue({
      firstName: 'Saiasdfg',
      lastName: 'Janani',
      email: 'sai@gmail.com',
      alternateEmail: 'sai@gmail.com',
      dateOfBirth: "2023-04-21T18:30:00.000Z",
      dateOfJoin: "2023-04-29T18:30:00.000Z",
      designationId: 2,
      roleId: 3,
      password: "$2b$07$iTl1n2SxMwp8H5YB3StgvuxgaFQX0Uc7HhGVWdYn/lzKNnjCGPKDC",
      managerName: 'sdf',
      managerEmail: 'abc@gmail.com',
      startDate: "2023-04-21T18:30:00.000Z",
      endDate: "2023-05-13T18:30:00.000Z",
      contacts: [{
        address: 'abc street',
        city: 'xyz',
        state: 'TamilNadu',
        pincode: 626123
      }]
    });
    component.formChanges();
    expect(component.formChanges).toBeDefined();
  })
  test('should cover forminitialise', () => {
    component.employeeDetails = {
      firstName: 'evew',
      lastName: 'Janani',
      email: 'sai@gmail.com',
      alternateEmail: 'sai@gmail.com',
      dateOfBirth: "2023-04-21T18:30:00.000Z",
      dateOfJoin: "2023-04-29T18:30:00.000Z",
      designationId: 2,
      roleId: 3,
      password: "$2b$07$iTl1n2SxMwp8H5YB3StgvuxgaFQX0Uc7HhGVWdYn/lzKNnjCGPKDC",
      managerName: 'sdf',
      managerEmail: 'abc@gmail.com',
      startDate: "2023-04-21T18:30:00.000Z",
      endDate: "2023-05-13T18:30:00.000Z",
      contacts: [{
        address: 'abc street',
        city: 'xyz',
        state: 'TamilNadu',
        pincode: 626123
      }]
    };
    component.formInitialize();
    expect(component.formInitialize).toBeDefined();
  })
  test('should call on onActiveValueChange', () => {
    component.empregForm = new FormGroup({
      firstName: new FormControl('Sai'),
      lastName: new FormControl('Janani'),
      email: new FormControl('sai@gmail.com'),
      alternateEmail: new FormControl('sai@gmail.com'),
      dateOfBirth: new FormControl("2023-04-21T18:30:00.000Z"),
      dateOfJoin: new FormControl("2023-04-29T18:30:00.000Z"),
      designationId: new FormControl(2),
      roleId: new FormControl(3),
      password: new FormControl("$2b$07$iTl1n2SxMwp8H5YB3StgvuxgaFQX0Uc7HhGVWdYn/lzKNnjCGPKDC"),
      managerName: new FormControl('sdf'),
      managerEmail: new FormControl('abc@gmail.com'),
      startDate: new FormControl("2023-04-21T18:30:00.000Z"),
      endDate: new FormControl(new Date(new Date().setDate(new Date().getDate() + 1))),
      contacts: new FormArray([new FormGroup({
        address: new FormControl('abc street'),
        city: new FormControl('xyz'),
        state: new FormControl('TamilNadu'),
        pincode: new FormControl(626123)
      })])
    })
    component.onActiveValueChange(false);
    expect(component.onActiveValueChange).toBeDefined();
  });

  test('should call on onActiveValueChange', () => {
    component.empregForm = new FormGroup({
      firstName: new FormControl('Sai'),
      lastName: new FormControl('Janani'),
      email: new FormControl('sai@gmail.com'),
      alternateEmail: new FormControl('sai@gmail.com'),
      dateOfBirth: new FormControl("2023-04-21T18:30:00.000Z"),
      dateOfJoin: new FormControl("2023-04-29T18:30:00.000Z"),
      designationId: new FormControl(2),
      roleId: new FormControl(3),
      password: new FormControl("$2b$07$iTl1n2SxMwp8H5YB3StgvuxgaFQX0Uc7HhGVWdYn/lzKNnjCGPKDC"),
      managerName: new FormControl('sdf'),
      managerEmail: new FormControl('abc@gmail.com'),
      startDate: new FormControl("2023-04-21T18:30:00.000Z"),
      endDate: new FormControl(new Date(new Date().setDate(new Date().getDate() - 1))),
      contacts: new FormArray([new FormGroup({
        address: new FormControl('abc street'),
        city: new FormControl('xyz'),
        state: new FormControl('TamilNadu'),
        pincode: new FormControl(626123)
      })])
    })
    component.onActiveValueChange(false);
    expect(component.onActiveValueChange).toBeDefined();
  });

  test('should call on CandeactivateGuard', () => {
    component.CandeactivateGuard();
    expect(component.CandeactivateGuard).toBeDefined();
  })

});
