// src/app/admin/admin.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [AdminSidebarComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AdminSidebarComponent
  ]
})
export class AdminModule {}