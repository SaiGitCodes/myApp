import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router) {

  }
  onNavigate() {
    this.router.navigate(['/app/story']);
  }

  //from here to auth service
  // onLogout() {
  //   sessionStorage.removeItem('currentUserToken');
  //   this.router.navigate(['/login']);
  // }

}
