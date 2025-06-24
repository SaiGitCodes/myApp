import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PassvalidatorsService } from 'src/app/shared/services/passvalidators.service';
import { SnackService } from 'src/app/shared/services/snack.service';
import { environment } from 'src/environments/environment';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  passwordGroup!: FormGroup;

  constructor(private passvalidatorsService: PassvalidatorsService,
    private snackservice: SnackService,
    private httpsservice: HttpService) { }

  ngOnInit() {

    //public API calling commented for backend purpose....evironment
    // this.httpsservice.getPost().subscribe(res => {
    //   console.log('responseService: ', res);
    // })

    // this.httpService.get(this.apiurl + 'posts').subscribe(res => {
    //   console.log('response: ', res);
    // }, (error) => {
    //   console.log('error: ', error);
    // })

    this.passwordGroup = new FormGroup({
      oldPassword: new FormControl(null, Validators.required),
      newPassword: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required)
    },
      this.passvalidatorsService.validateAreEqual.bind(this));
    // this.passvalidatorsService.validateAreEqual(this.passwordGroup));
  }

  // onSubmit() {
  //   if (this.passwordGroup.valid) {
  //     this.snackservice.clickmesnack('Successfully Submitted', 'Success');
  //   }
  //   // else {
  //   //   this.snackservice.clickmesnack('Error');
  //   // }
  // }

}
