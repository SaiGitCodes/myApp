import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { snackinterf, snackenum } from 'src/app/core/models/snack.model';
import { SnackComponent } from '../components/snack/snack.component';

@Injectable({
  providedIn: 'root'
})
export class SnackService {
  saisnack = [
    { message: 'Success', micon: 'done', panelClass: snackenum.Success },
    { message: 'Info', micon: 'info', panelClass: snackenum.Info },
    { message: 'Error', micon: 'help', panelClass: snackenum.Error },
    { message: 'Default', micon: 'thumb_up', panelClass: snackenum.Default },
    { message: 'Warning', micon: 'warning_amber', panelClass: snackenum.Warning },
    // { message: 'Successfully Deleted', micon: 'done', panelclass: 'delete' }
  ]
  constructor(private snackBar: MatSnackBar) { }
  // clickmesnack(msg: string, content: string, duration?: number, panelClass?: string) {
  clickmesnack(input: snackinterf) {
    const value = this.saisnack.find(i => i.panelClass === input.content);
    this.snackBar.openFromComponent(SnackComponent, {
      data: {
        msg1: input.msg,
        symbol: value.micon
      },
      duration: input.duration ? input.duration : 5000,
      panelClass: input.panelClass ? input.panelClass : value?.message,
      verticalPosition: input.verticalPosition ? input.verticalPosition : 'start',
      horizontalPosition: input.horizontalPosition ? input.horizontalPosition : 'end'
    });
  }
}
