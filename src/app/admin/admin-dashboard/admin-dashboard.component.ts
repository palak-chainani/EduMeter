import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
   currentUser = JSON.parse(localStorage.getItem('currentUser')!);
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    // Add error handling
    this.router.navigate([route]).catch(err => {
      console.error('Navigation error:', err);
      // Optionally redirect to error page or show message
    });
  }

  
}