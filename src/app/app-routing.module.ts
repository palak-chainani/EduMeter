import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './faculty/dashboard/dashboard.component';
import { AddTaskComponent } from './faculty/add-task/add-task.component';
import { SummaryComponent } from './faculty/summary/summary.component';
import { TasklogComponent } from './faculty/task-log/task-log.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AddTeacherComponent } from './admin/add-teacher/add-teacher.component';
import { TeacherListComponent } from './admin/teacher-list/teacher-list.component';
import { SalaryCalculationComponent } from './admin/salary-calculation/salary-calculation.component';

const routes: Routes = [
  
  {
    path:'login',
    component:LoginComponent
  },
  { path: 'faculty-dashboard',
    component: DashboardComponent 
  },
  { path: 'add-task',
    component: AddTaskComponent 
  },
  { path: 'summary',
    component: SummaryComponent 
  },
  { path: 'task-log',
    component: TasklogComponent 
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'add-teacher',
    component: AddTeacherComponent
  },
  {
    path: 'teacher-list',
    component: TeacherListComponent
  },
  {
    path: 'salary-calculation',
    component: SalaryCalculationComponent
  },
  { path: '**', 
    redirectTo: 'login',
     pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
