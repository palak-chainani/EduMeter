import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-tasklog',
  templateUrl: './task-log.component.html',
  styleUrls: ['./task-log.component.css']
})
export class TasklogComponent implements OnInit {
  tasks: any[] = [];

  constructor(
    private databaseService: DatabaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadTasksForCurrentUser();
  }

  loadTasksForCurrentUser() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    const allTasks = this.databaseService.getTasks();

    this.tasks = allTasks
      .filter((task: any) => task.assignedBy === `${currentUser.firstName} ${currentUser.lastName}`)
      .map((task: any) => ({
        ...task,
        date: new Date(task.date)
      }));
  }

  editTask(task: any) {
    this.databaseService.setTaskToEdit(task);
    this.router.navigate(['/faculty/add-task']);
  }

  deleteTask(task: any) {
    this.databaseService.deleteTask(task);
    this.loadTasksForCurrentUser();
  }
}
