import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  teachers!: any
  tasks!: any
  taskToEdit: any = null;

  constructor() {
    const savedTeachers = localStorage.getItem('teachers');
    const savedTasks = localStorage.getItem('tasks');

    this.teachers = savedTeachers ? JSON.parse(savedTeachers) : [];
    this.tasks = savedTasks ? JSON.parse(savedTasks) : [];
  }

  // when clicked on edit btn this function will run
   setTaskToEdit(task: any) {
    this.taskToEdit = task; // temp memory
  }

  //Jab Add Task page open ho toh ye get karna
  getTaskToEdit() {
    return this.taskToEdit;
  }

  // when finished editing clear it
  clearTaskToEdit() {
    this.taskToEdit = null;
  }

  // Special: agar edit mode mein ho, toh old task ko overwrite karo
  updateTask(updatedTask: any) {
    const index = this.tasks.findIndex(
      (t: any) => 
        t.subject === updatedTask.subject &&
        t.date === updatedTask.date
    );

    if (index !== -1) {
      this.tasks[index] = updatedTask;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  addNewTeacher(data: any) {
    this.teachers.push(data)
    localStorage.setItem('teachers', JSON.stringify(this.teachers));
  }

  getTasks() {
    return this.tasks
  }

  getTeachers() {
    return this.teachers;
  }

  addTask(data: any) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);

    const taskWithTeacher = {
      ...data,
      assignedBy: currentUser.firstName + ' ' + currentUser.lastName
    };

    this.tasks.push(taskWithTeacher);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

deleteTask(taskToDelete: any) {
  const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

  // tasks list ko filter karo jo match na kare
  const updatedTasks = savedTasks.filter((task: any) => {
    return !(
      task.subject === taskToDelete.subject &&
      task.date === taskToDelete.date &&
      task.time === taskToDelete.time && // unique banane ke liye time bhi le lo
      task.assignedBy === taskToDelete.assignedBy
    );
  });

  // localStorage update karo
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));

  // service ke local array ko bhi update karo
  this.tasks = updatedTasks;
}


}
