import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HttpService } from 'src/app/auth/services/http.service';
import { SnackService } from 'src/app/shared/services/snack.service';
import { snackenum } from '../../models/snack.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FAQsComponent {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private datepipe: DatePipe, private snackservice: SnackService,
    private authservice: AuthService, private httpservice: HttpService,
    private router: ActivatedRoute,
    private route: Router) {

  }

  messages: any;

  // for Frontend only
  // Designation = [
  //   { id: 1, name: "Team Leader" },
  //   { id: 2, name: "Software Engineer" },
  //   { id: 3, name: "Senior Software Engineer" },
  //   { id: 4, name: "Product Manager" },
  //   { id: 5, name: "Business Analyst" }
  // ];

  //using frontEnd and Backend
  Designation: any;
  Role: any;
  employeeDetails: any;

  // Role = [
  //   { id: 1, name: "Super Admin" },
  //   { id: 2, name: "Admin" }, 
  //   { id: 3, name: "Employee" }
  // ];

  empregForm!: FormGroup;
  today = new Date();
  update = false;
  paramData = {
    data: '', id: ''
  };

  ngOnInit() {

    this.authservice.message.subscribe(res => this.messages = res);

    this.httpservice.getDesignation().subscribe((res: any) => {
      this.Designation = res.designation;
      console.log(this.Designation);

    })

    this.httpservice.getRole().subscribe((res: any) => {
      this.Role = res.role;
      console.log(this.Role);
    })

    this.router.params.subscribe((res: any) => {
      console.log('Params : ', res);
      if (res && res.id && res.data) {
        this.paramData.id = res.id;
        this.paramData.data = res.data;
        this.update = true;
        this.httpservice.getEmployeeFormFill({ id: +res.id }).subscribe((response: any) => {
          console.log('employee record: ', response);
          this.employeeDetails = response.employeeDetails;
          console.log('employeeDetails: ', this.employeeDetails);
          this.formInitialize();
        })
      } else {
        this.formInitialize();
      }
    })

    // this.empregForm = new FormGroup({
    //   firstName: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z  ]+$')]),
    //   lastName: new FormControl(null),
    //   email: new FormControl(null, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')),
    //   alternateEmail: new FormControl(null, Validators.email),
    //   dateOfBirth: new FormControl(null, Validators.required),
    //   dateOfJoin: new FormControl(null, Validators.required),
    //   designationId: new FormControl(null),
    //   roleId: new FormControl(null),
    //   isExternalApprover: new FormControl(null),
    //   managerName: new FormControl(null),
    //   managerEmail: new FormControl(null),
    //   startDate: new FormControl(null),
    //   endDate: new FormControl(null),
    //   // eicon: new FormControl(null),
    //   actionstat: new FormControl(null),
    //   contacts: new FormArray([])
    // });
    // this.createArray();
    // this.createArray();
    // this.disappear();


    // this.empregForm.patchValue({
    //   alternateEmail: 'saijananitm@gmail.com'

    // });

    // this.formChanges();

  }
  formInitialize() {
    this.empregForm = new FormGroup({
      firstName: new FormControl(this.employeeDetails && this.employeeDetails.firstName ? this.employeeDetails.firstName : null, [Validators.required, Validators.pattern('^[a-zA-Z  ]+$')]),
      lastName: new FormControl(this.employeeDetails && this.employeeDetails.lastName ? this.employeeDetails.lastName : null),
      email: new FormControl(this.employeeDetails && this.employeeDetails.email ? this.employeeDetails.email : null, [Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
      alternateEmail: new FormControl(this.employeeDetails && this.employeeDetails.alternateEmail ? this.employeeDetails.alternateEmail : null, Validators.email),
      dateOfBirth: new FormControl(this.employeeDetails && this.employeeDetails.dateOfBirth ? this.employeeDetails.dateOfBirth : null, Validators.required),
      dateOfJoin: new FormControl(this.employeeDetails && this.employeeDetails.dateOfJoin ? this.employeeDetails.dateOfJoin : null, Validators.required),
      designationId: new FormControl(this.employeeDetails && this.employeeDetails.designationId ? this.employeeDetails.designationId : null),
      roleId: new FormControl(this.employeeDetails && this.employeeDetails.roleId ? this.employeeDetails.roleId : null),
      password: new FormControl(this.employeeDetails && this.employeeDetails.password ? this.employeeDetails.password : null),
      isExternalApprover: new FormControl(null),
      managerName: new FormControl(null),
      managerEmail: new FormControl(null),
      startDate: new FormControl(null),
      endDate: new FormControl(null),
      // eicon: new Form  Control(null),
      actionstat: new FormControl(null),
      contacts: new FormArray([])
    });
    this.createArray();
  }
  getContacts() {
    return (this.empregForm.get('contacts') as FormArray).controls;
  }
  getControls(form: any, i: number) {
    return form.get('contacts').controls[i].controls;
  }

  createArray() {
    (this.empregForm.get('contacts') as FormArray).push(new FormGroup({
      address: new FormControl('abc street', Validators.required),
      city: new FormControl('xyz', Validators.required),
      state: new FormControl('TamilNadu', Validators.required),
      pincode: new FormControl(626123, Validators.required)
    }));
  }

  removeItem(index: number): void {
    (this.empregForm.get('contacts') as FormArray).removeAt(index);
  }

  // onSubmit(form: FormGroupDirective) {
  onSubmit() {
    if (this.empregForm.valid) {
      console.log("Form ", this.empregForm.value);
      if (!this.update) {
        // console.log("Form values", this.empregForm.value);
        this.httpservice.createEmployee(this.empregForm.value).subscribe(res => {
          if (res) {
            this.snackservice.clickmesnack({
              msg: this.messages.DATA_SAVED, content: snackenum.Success,
              horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition
            });
            console.log('response ', res);
            // form.resetForm();
          }
        });
      } else {
        this.empregForm.value.id = +this.paramData.id;
        console.log('UpdateForm:', this.empregForm.value);
        this.httpservice.updateEmployee(this.empregForm.value).subscribe(res => {
          if (res) {
            console.log('updateres: ', res);
            this.empregForm.markAsPristine();
            this.snackservice.clickmesnack({
              msg: this.messages.DATA_UPDATED, content: snackenum.Success,
              horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition
            });
            this.route.navigate(['/app/extable']);
          }
        });
      }

    }

    // if (this.empregForm.valid) {
    //   this.snackservice.clickmesnack('Success');
    // }
    // else {
    //   this.snackservice.clickmesnack('Error');
    // }
  }

  onReset() {
    this.empregForm.reset();
  }

  approver = {
    externalApprover: 1,
    internalApprover: 0
  }

  // disappear() {
  //   if (this.empregForm) {
  //     this.empregForm.disable();
  //   }
  // }

  onExternalApprover(value: number) {
    console.log('value ', value);
    if (value === this.approver.externalApprover) {
      this.empregForm.get('managerName')?.setValidators(Validators.required),
        this.empregForm.get('managerEmail')?.setValidators(Validators.required)
    } else {
      this.empregForm.get('managerName')?.clearValidators();
      this.empregForm.get('managerEmail')?.clearValidators();
      this.empregForm.get('managerName')?.updateValueAndValidity();
      this.empregForm.get('managerEmail')?.updateValueAndValidity();

    }

  }

  clicked: any = false;
  viewclicked: any = false;
  onClick() {
    this.clicked = !this.clicked;
    this.empregForm.addControl("nationality", new FormControl(null));
    if (this.clicked) {
      // this.empregForm.addControl("nationality", new FormControl(null));
      this.empregForm.get('nationality')?.setValidators(Validators.required);
    }
    else {
      // this.empregForm.removeControl("nationality");
      this.empregForm.get('nationality')?.clearValidators();
      this.empregForm.get('nationality')?.updateValueAndValidity();
    }
  }

  onView() {
    this.viewclicked = !this.viewclicked;
    if (this.viewclicked) {
      this.empregForm.get('firstName')?.disable();
      this.empregForm.get('lastName')?.disable();
    }
    else {
      this.empregForm.get('firstName')?.enable();
      this.empregForm.get('lastName')?.enable();
    }
  }

  onActiveValueChange(value: boolean) {

    if (value == false) {
      if (this.datepipe.transform(new Date(this.empregForm.value.endDate), 'yyyy-MM-dd') >
        this.datepipe.transform(new Date(), 'yyyy-MM-dd')) {
        this.empregForm.get('actionstat')?.setErrors({ changeEndDate: true });
      } else {
        this.empregForm.get('actionstat')?.setErrors(null);
      }
    }
  }


  // for detecting the changes in the whole form
  // formChanges() {
  //   this.empregForm.valueChanges.subscribe(res => {
  //     console.log('res ', res);
  //   });
  // }
  // for detecting the particular control changes
  formChanges() {
    this.empregForm.get('firstName')?.valueChanges.subscribe(res => {
      console.log('res ', res);
    });
  }

  CandeactivateGuard(): boolean {
    return this.empregForm ? !this.empregForm.dirty : true;
  }


}

  // validNation() {
  //   if (this.clicked) {
  //     this.empregForm.get('nationality')?.setValidators(Validators.required);
  //   }
  //   else {
  //     this.empregForm.get('nationality')?.clearValidators();
  //     this.empregForm.get('nationality')?.updateValueAndValidity();
  //   }

  // }

