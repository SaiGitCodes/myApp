import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  signinForm!: FormGroup;
  // usermail = "saijanani@gmail.com";
  // password = "12345";
  messages: any;
  // token = "sFSGUH2hvhgfytd`086FV";
  errorMessage: any;
  error: boolean;
  constructor(private authservice: AuthService,
    private router: Router) { }
  ngOnInit() {

    this.authservice.message.subscribe(res => {
      this.messages = res
    });

    this.signinForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
  }
  // onSubmit() {
  //   if (this.signinForm.valid) {
  //     if (this.signinForm.value.mailId == this.usermail && this.signinForm.value.password == this.password) {
  //       //to store the token in session storage
  //       sessionStorage.setItem('currentUserToken', JSON.stringify({ token: this.token }))
  //       this.router.navigate(['app/change-password']);
  //     }
  //   }
  // }

  signIn() {
    if (this.signinForm.valid) {

      this.authservice.signIn(this.signinForm.value).subscribe(response => {
        if (response && response['user']) {
          console.log('response: ', response);
          this.router.navigate(['/app/extable']);
        }
      }, (err) => {
        if (err.error && err.error.error) {
          this.errorMessage = err.error.error;
          this.error = true;
        }
      })
    }
  }

}
