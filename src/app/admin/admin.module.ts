// src/app/admin/admin.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TeacherListComponent } from './teacher-list/teacher-list.component';

@NgModule({
  declarations: [AdminSidebarComponent, AdminDashboardComponent, AddTeacherComponent, TeacherListComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminSidebarComponent
  ]
})
export class AdminModule {}