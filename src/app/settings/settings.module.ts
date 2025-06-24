import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanySettingsComponent } from './components/company-settings/company-settings.component';
import { DepartmentComponent } from './components/department/department.component';
import { SettingsRoutingModule } from './settings-routing.module';



@NgModule({
  declarations: [
    CompanySettingsComponent,
    DepartmentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
