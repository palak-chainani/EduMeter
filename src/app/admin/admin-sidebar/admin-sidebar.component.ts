// src/app/admin/admin-sidebar/admin-sidebar.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  menuItems = [
    { name: 'Admin Dashboard', active: false },
    { name: 'Approve Tasks', active: false },
    { name: 'Add Teacher', active: false },
    { name: 'Salary Calculation', active: false },
    { name: 'Teacher List', active: false },
    { name: 'Logout ', active: false }, 
    // { name: 'function', active: false },
    // { name: 'Summarize to ref.', active: false },
    // { name: 'Taskskey', active: false }
  ];

  constructor(private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}