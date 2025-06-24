import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { MaterialModule } from '../material/material.module';
import { StoryComponent } from './component/story/story.component';
import { ProductsComponent } from './component/products/products.component';
import { FAQsComponent } from './component/faqs/faqs.component';
import { ContactComponent } from './component/contact/contact.component';
import { ExtableComponent } from './component/extable/extable.component';
import { SigninComponent } from './component/signin/signin.component';
import { LoginComponent } from './component/login/login.component';
import { NewaccComponent } from './component/newacc/newacc.component';
import { TablechildComponent } from './component/tablechild/tablechild.component';
import { SharedModule } from '../shared/shared.module';
import { HighlightComponent } from './component/highlight/highlight.component';
import { HighlightPipe } from './pipes/highlight.pipe';
import { AppendPipe } from './pipes/append.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginCardMarginDirective } from './directives/login-card-margin.directive';
import { ObservablesComponent } from './component/observables/observables.component';
import { RoleComponent } from './component/role/role.component';



@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    NavbarComponent,
    HomeComponent,
    StoryComponent,
    ProductsComponent,
    FAQsComponent,
    ContactComponent,
    ExtableComponent,
    SigninComponent,
    LoginComponent,
    NewaccComponent,
    TablechildComponent,
    HighlightComponent,
    HighlightPipe,
    AppendPipe,
    FilterPipe,
    LoginCardMarginDirective,
    ObservablesComponent,
    RoleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    ParentComponent,
    ChildComponent,
    NavbarComponent,
    HomeComponent
  ],
  providers: [
    DatePipe
  ]
})
export class CoreModule { }
