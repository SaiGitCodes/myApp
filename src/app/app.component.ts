import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { HeaderService } from './core/services/header.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';
  imgsrc = "../assets/flower.jpg";
  name = "";
  // age=" ";
  show = false;
  apiUrl: string;
  // showage=false;
  // newname="";

  constructor(private authservice: AuthService,
    private headerservice: HeaderService) { }

  ngOnInit() {
    this.authservice.getMessage();
    this.headerservice.setHeaders(this.apiUrl + 'v1/login', 'content-type', 'application/json');
  }

  onclick() {
    //  console.log("Hello");
    this.show = !this.show;
    //  this.showage=!this.showage;
  }
}
