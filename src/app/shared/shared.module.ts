import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './components/dialog/dialog.component';
import { MaterialModule } from '../material/material.module';
import { ExtableComponent } from '../core/component/extable/extable.component';
import { CoreModule } from '../core/core.module';
import { SnackComponent } from './components/snack/snack.component';




@NgModule({
  declarations: [
    DialogComponent,
    SnackComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [
    DialogComponent
  ]
})
export class SharedModule { }
