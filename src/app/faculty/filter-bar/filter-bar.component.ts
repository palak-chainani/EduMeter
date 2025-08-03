import { Component, OnInit } from '@angular/core';
//import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {
  fromDate: string = '';
  toDate: string = '';
  allTasks: any[] = [
    { date: '2025-08-01', lectures: 2, practicals: 1, hours: 3 },
    { date: '2025-08-02', lectures: 3, practicals: 0, hours: 3 },
    { date: '2025-08-03', lectures: 1, practicals: 2, hours: 3 }
  ];
  filteredTasks: any[] = [];
  filterDate: string = ''; 

  //constructor(private dbService: DatabaseService) {}
  ngOnInit(): void {
    //this.allTasks = this.dbService.getTasks();
    this.filteredTasks = this.allTasks;
  }

  applyFilter() {
    if (this.fromDate && this.toDate) {
      const from = new Date(this.fromDate);
      const to = new Date(this.toDate);
      this.filteredTasks = this.allTasks.filter(task => {
        const taskDate = new Date(task.date);
        return taskDate >= from && taskDate <= to;
      });
    } else {
      this.filteredTasks = this.allTasks;
    }
  }
}
