// import { Component } from '@angular/core';
// import { SnackService } from 'src/app/shared/services/snack.service';
// import { snackenum } from '../../models/snack.model';

// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.scss']
// })
// export class ContactComponent {
//   constructor(private snackservice: SnackService) { }
//   Success() {
//     this.snackservice.clickmesnack({ msg: 'verified', content: snackenum.Success });
//   }
//   Error() {
//     this.snackservice.clickmesnack({ msg: 'Needs Correction', content: snackenum.Error });
//   }
//   Information() {
//     this.snackservice.clickmesnack({ msg: 'Got it!', content: snackenum.Info });
//   }
//   Default() {
//     this.snackservice.clickmesnack({ msg: 'Noted', content: snackenum.Default });
//   }
//   Warning() {
//     this.snackservice.clickmesnack({ msg: 'Alert', content: snackenum.Warning });
//   }
// }

import { Component } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackService } from 'src/app/shared/services/snack.service';
import { snackenum } from '../../models/snack.model';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private snackservice: SnackService,
    private authservice: AuthService) { }

  messages: any;
  ngOnInit(): any {

    this.authservice.message.subscribe(res => this.messages = res);

  }

  Success() {
    this.snackservice.clickmesnack({
      msg: this.messages.VERIFIED, content: snackenum.Success,
      horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition
    });
  }
  Error() {
    this.snackservice.clickmesnack({
      msg: this.messages.CORRECTION, content: snackenum.Error,
      horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition
    });
  }
  Information() {
    this.snackservice.clickmesnack({
      msg: this.messages.GOTIT, content: snackenum.Info,
      horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition
    });
  }
  Default() {
    this.snackservice.clickmesnack({
      msg: this.messages.NOTED, content: snackenum.Default,
      horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition
    });
  }
  Warning() {
    this.snackservice.clickmesnack({
      msg: this.messages.ALERT, content: snackenum.Warning,
      horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition
    });
  }
}






