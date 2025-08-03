// src/app/admin/admin-sidebar/admin-sidebar.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent{
  menuItems = [
    { name: 'Admin Dashboard',path: '/admin/admin-dashboard', active: false },
    // { name: 'Approve Tasks', path: '/admin/approve-tasks', active: false },
    { name: 'Add Teacher', path: '/admin/add-teacher', active: false },
    { name: 'Salary Calculation', path: '/admin/salary-calculation', active: false },
    { name: 'Teacher List', path: '/admin/teacher-list', active: false },
    { name: 'Logout ', path: 'logout', active: false }, 
  ];

    constructor(private router: Router) {
    // Current URL check karo
    const currentPath = this.router.url;
    
    // Jo bhi menu item ka path current URL se match kare, uska active=true karo
    this.menuItems.forEach(item => {
      item.active = currentPath.startsWith(item.path);
    });
  
  }

   navigateTo(path: string) {
    this.router.navigateByUrl(path);;
  }
}