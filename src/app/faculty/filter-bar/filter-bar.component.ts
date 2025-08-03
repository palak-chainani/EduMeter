import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {
  filterDate: string = '';
  allTasks: any[] = [];
  filteredTasks: any[] = [];

  ngOnInit() {
    // Load from localStorage
    const storedTasks = localStorage.getItem('facultyTasks');
    if (storedTasks) {
      this.allTasks = JSON.parse(storedTasks);
    }
  }

  applyFilter() {
    if (!this.filterDate) return;

    this.filteredTasks = this.allTasks.filter(task => task.date === this.filterDate);
  }
}
