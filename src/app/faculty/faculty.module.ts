import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { SummaryCardComponent } from './summary-card/summary-card.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { TaskLogComponent } from './task-log/task-log.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    AddTaskComponent,
    SummaryCardComponent,
    FilterBarComponent,
    TaskLogComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FacultyModule { }
