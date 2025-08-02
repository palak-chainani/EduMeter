// tasklog.component.ts
import { Component } from '@angular/core';

interface Task {
  subject: string;
  type: string;
  hours: number;
  date: Date;
  status: 'Completed' | 'Pending' | 'Rejected';
}

@Component({
  selector: 'app-tasklog',
  templateUrl: './task-log.component.html',
  styleUrls: ['./task-log.component.css']
})
export class TasklogComponent {
  tasks: Task[] = [
    {
      subject: 'Mathematics',
      type: 'Lecture',
      hours: 2,
      date: new Date('2023-05-15'),
      status: 'Completed'
    },
    {
      subject: 'Physics',
      type: 'Practical',
      hours: 3,
      date: new Date('2023-05-16'),
      status: 'Pending'
    },
    {
      subject: 'Computer Science',
      type: 'Seminar',
      hours: 1.5,
      date: new Date('2023-05-17'),
      status: 'Completed'
    },
    {
      subject: 'Chemistry',
      type: 'Lab',
      hours: 2,
      date: new Date('2023-05-18'),
      status: 'Pending'
    }
  ];

  editTask(task: Task) {
    // Implement edit functionality
    console.log('Editing task:', task);
  }

  deleteTask(task: Task) {
    // Implement delete functionality
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}