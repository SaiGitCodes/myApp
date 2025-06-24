import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExtableComponent } from 'src/app/core/component/extable/extable.component';
import { HomeComponent } from 'src/app/core/component/home/home.component';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }
  openConfirmationDialog(message: string, className?: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        header: 'Confirmation',
        content: message,
        actionType: 'Confirmation',
      },
      autoFocus: false
    });
    return dialogRef;
  }
}