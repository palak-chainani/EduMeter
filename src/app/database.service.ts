import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

   constructor() {
    const savedTeachers = localStorage.getItem('teachers');
    const savedTasks = localStorage.getItem('tasks');

    this.teachers = savedTeachers ? JSON.parse(savedTeachers) : [];
    this.tasks = savedTasks ? JSON.parse(savedTasks) : [];
  }
  teachers!:any
  tasks!:any

  addNewTeacher(data:any){
    this.teachers.push(data)
    localStorage.setItem('teachers', JSON.stringify(this.teachers));
  }

  getTasks(){
    return this.tasks
  }

  getTeachers(){
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

  
}
