import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';
import { Tasks } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-tasklog',
  templateUrl: './task-log.component.html',
  styleUrls: ['./task-log.component.css']
})
export class TasklogComponent implements OnInit {
  tasks: Tasks[] = [];

  constructor(
    private databaseService: DatabaseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadTasksForCurrentUser();
  }

  // ✅ Common method: always get fresh tasks for current user
  loadTasksForCurrentUser() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    const allTasks = this.databaseService.getTasks();

    this.tasks = allTasks
      .filter(
        (task: Tasks) =>
          task.assignedBy === `${currentUser.firstName} ${currentUser.lastName}`
      )
      .map((task: Tasks) => ({
        ...task,
        date: new Date(task.date)
      }));
  }

  // ✅ Edit Task — always use service
  editTask(task: Tasks) {
    this.databaseService.setTaskToEdit(task);
    this.router.navigate(['faculty/add-task']);
  }

  // ✅ Delete Task — delete & refresh list
  deleteTask(task: Tasks) {
    this.databaseService.deleteTask(task);
    this.loadTasksForCurrentUser();
  }
}
