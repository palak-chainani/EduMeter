import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AddTaskComponent } from './faculty/add-task/add-task.component';
import { DashboardComponent } from './faculty/dashboard/dashboard.component';
const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'addTask',
    component: AddTaskComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
import { DashboardComponent } from './faculty/dashboard/dashboard.component';

const routes: Routes = [
  { path: '**', 
    redirectTo: 'login',
     pathMatch: 'full'
  },
  { path: 'faculty-dashboard',
    component: DashboardComponent 
  },

  // { path: 'admin-dashboard', component: AdminDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
