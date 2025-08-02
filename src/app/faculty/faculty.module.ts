import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddTaskComponent } from './add-task/add-task.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FacultyModule { }
