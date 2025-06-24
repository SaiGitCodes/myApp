import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    // CoreModule,
    // SharedModule
  ],
  exports: [
    ChangePasswordComponent
  ]
})
export class AuthModule { }
