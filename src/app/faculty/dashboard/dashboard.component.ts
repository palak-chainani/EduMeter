// dashboard.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  currentUser = JSON.parse(localStorage.getItem('currentUser')!);
  professorName = `${this.currentUser.firstName} ${this.currentUser.lastName}`;
 

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([`/faculty/${route}`]);
  }
}