// src/app/admin/admin.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { SalaryCalculationComponent } from './salary-calculation/salary-calculation.component';

@NgModule({
  declarations: [AdminSidebarComponent, AdminDashboardComponent, AddTeacherComponent, TeacherListComponent,   SalaryCalculationComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AdminSidebarComponent
  ]
})
export class AdminModule {}