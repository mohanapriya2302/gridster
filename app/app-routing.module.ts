import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { FirstComponent } from './components/first/first.component';
import { UserGuardGuard } from './guards/user-guard.guard';
import { EmployeeheaderComponent } from './components/employeeheader/employeeheader.component';
import { SidebarComponent } from './components/sidebar';

const routes: Routes = [
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'home', component: HomeComponent},
    {path: 'first', component: FirstComponent},
    {path: '', redirectTo:'signin', pathMatch:'full'},
    {path: '**', redirectTo:'signin', pathMatch:'full'},
    { path: '', component: HomeComponent, canActivate: [UserGuardGuard] }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
