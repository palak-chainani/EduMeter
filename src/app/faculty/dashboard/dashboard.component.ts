// dashboard.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  professorName = 'John Doe'; // Replace with dynamic data

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([`/faculty/${route}`]);
  }
}