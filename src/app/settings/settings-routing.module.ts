import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanySettingsComponent } from './components/company-settings/company-settings.component';
import { DepartmentComponent } from './components/department/department.component';

const routes: Routes = [
  { path: 'company-settings', component: CompanySettingsComponent },
  { path: 'department', component: DepartmentComponent }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }