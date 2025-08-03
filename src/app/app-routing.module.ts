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
import { FilterBarComponent } from './faculty/filter-bar/filter-bar.component';

const routes: Routes = [
  
  {
    path:'login',
    component:LoginComponent
  },
  { path: 'faculty/faculty-dashboard',
    component: DashboardComponent 
  },
  { path: 'faculty/add-task',
    component: AddTaskComponent 
  },
  { path: 'faculty/summary',
    component: SummaryComponent 
  },
  { path: 'faculty/task-log',
    component: TasklogComponent 
  },
  {
    path: 'admin/admin-dashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'admin/add-teacher',
    component: AddTeacherComponent
  },
  {
    path: 'admin/teacher-list',
    component: TeacherListComponent
  },
  {
    path: 'admin/salary-calculation',
    component: SalaryCalculationComponent
  },
  {
    path:'faculty/filterbar',
    component:FilterBarComponent
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
