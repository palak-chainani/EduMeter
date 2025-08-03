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

  constructor(private databaseService: DatabaseService, private router:Router) {}

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

   //edit button pe call hoga
  editTask(task: Tasks) {
    this.databaseService.setTaskToEdit(task); // temp store karo
    this.router.navigate(['faculty/add-task']); // Add Task page pe jao
  }

deleteTask(task: any) {
  this.databaseService.deleteTask(task);

  const allTasks = this.databaseService.getTasks();
  const currentUser = JSON.parse(localStorage.getItem('currentUser')!);

  this.tasks = allTasks.filter(
    (t: any) =>
      t.assignedBy === `${currentUser.firstName} ${currentUser.lastName}`
  );
}




}
