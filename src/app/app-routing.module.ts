import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { ContactComponent } from './core/component/contact/contact.component';
import { ExtableComponent } from './core/component/extable/extable.component';
import { FAQsComponent } from './core/component/faqs/faqs.component';
import { HighlightComponent } from './core/component/highlight/highlight.component';
import { HomeComponent } from './core/component/home/home.component';
import { LoginComponent } from './core/component/login/login.component';
import { NavbarComponent } from './core/component/navbar/navbar.component';
import { NewaccComponent } from './core/component/newacc/newacc.component';
import { ParentComponent } from './core/component/parent/parent.component';
import { ProductsComponent } from './core/component/products/products.component';
import { SigninComponent } from './core/component/signin/signin.component';
import { StoryComponent } from './core/component/story/story.component';
import { ObservablesComponent } from './core/component/observables/observables.component';
import { CustomPreloadingStrategyService } from './settings/services/custom-preloading-strategy.service';
import { AuthGuard } from './auth/services/auth.guard';
import { AccessGuard } from './auth/services/access.guard';
import { LoginGuard } from './auth/services/login.guard';
import { CandeactivateGuard } from './shared/services/can-deactivate-guard.guard';
import { RoleComponent } from './core/component/role/role.component';
import { TablechildComponent } from './core/component/tablechild/tablechild.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  {
    // path: 'app', component: ParentComponent, children: [
    path: 'app', component: NavbarComponent, canActivate: [AuthGuard], canActivateChild: [AccessGuard], children: [
      { path: 'home', component: HomeComponent },
      { path: 'story', component: StoryComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'FAQs', component: FAQsComponent, canDeactivate: [CandeactivateGuard] },
      { path: 'FAQs/:data/:id', component: FAQsComponent, canDeactivate: [CandeactivateGuard] },
      { path: 'contact', component: ContactComponent },
      { path: 'extable', component: ExtableComponent },
      { path: 'tablechild', component: TablechildComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'newacc', component: NewaccComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'highlight', component: HighlightComponent },
      { path: 'observables', component: ObservablesComponent },
      { path: 'role', component: RoleComponent },
      //lazy loading syntax
      {
        path: 'settings',
        loadChildren: () => import(`./settings/settings.module`).then(m => m.SettingsModule),
        data: { applyPreload: true }
      }
    ]
  }
];

//Normal routing
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

//preLoading syntax
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategyService })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
