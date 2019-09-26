import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';

import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { FeePortalComponent } from '../app/fee-portal/fee-portal.component';
import { TeacherPortalComponent } from '../app/teacher-portal/teacher-portal.component';
import { TeacherDashbordComponent } from '../app/teacher-dashbord/teacher-dashbord.component';
import { AttendenceComponent } from '../app/attendence/attendence.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'fee',
    component: FeePortalComponent
  },
  {
    path:'teacher',
    component: TeacherPortalComponent
  },
  {
    path:'tdashbord',
    component: TeacherDashbordComponent
  },
  {
    path:'attendence',
    component: AttendenceComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

