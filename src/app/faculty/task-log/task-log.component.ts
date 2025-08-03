import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { Tasks } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-tasklog',
  templateUrl: './task-log.component.html',
  styleUrls: ['./task-log.component.css']
})
export class TasklogComponent implements OnInit {
  tasks: Tasks[] = [];

  constructor(private databaseService: DatabaseService) {}

  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    const allTasks = this.databaseService.getTasks();

    this.tasks = allTasks
      .filter((task: Tasks) => task.assignedBy === `${currentUser.firstName} ${currentUser.lastName}`)
      .map((task: Tasks) => ({
        ...task,
        date: new Date(task.date)
      }));
  }

  editTask(task: Tasks) {
    console.log('Editing task:', task);
  }

  deleteTask(task: Tasks) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);

      const allTasks = this.databaseService.getTasks();
      const globalIndex = allTasks.indexOf(task);
      if (globalIndex !== -1) {
        allTasks.splice(globalIndex, 1);
        localStorage.setItem('tasks', JSON.stringify(allTasks));
      }
    }
  }
}
