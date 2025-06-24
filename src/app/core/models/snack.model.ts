import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';


export enum snackenum {
  Success, Error, Default, Warning, Info
}

export interface snackinterf {
  msg: string,
  content: snackenum,
  duration?: number,
  panelClass?: string,
  horizontalPosition?: any,
  verticalPosition?: any
  // horizontalPosition: MatSnackBarHorizontalPosition,
  // verticalPosition: MatSnackBarVerticalPosition
}