import { SignupComponent } from './../../../../libs/ui-libraries/src/lib/signup/signup.component';
import { ProjectItemComponent } from './project/project-item/project-item.component';
import { WildcardComponent } from './../../../../libs/ui-libraries/src/lib/wildcard/wildcard.component';
import { LoginComponent } from './../../../../libs/ui-libraries/src/lib/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { AuthGuard } from '@mdv-nine/core-data'

const routes: Routes = [
  { path: 'projects', canActivate: [AuthGuard], children: [
    { path: '', component: ProjectComponent },
    { path: ':id', component: ProjectItemComponent }
  ] },
  { path: 'login', component: LoginComponent },
  { path: '404', component: WildcardComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
