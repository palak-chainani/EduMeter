// faculty.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SidebarComponent } from './sidebar/sidebar.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryComponent } from './summary/summary.component';
import { TasklogComponent } from './task-log/task-log.component';

@NgModule({
  declarations: [
    SidebarComponent,
    AddTaskComponent,
    DashboardComponent,
    SummaryComponent,
    TasklogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class FacultyModule {}