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

  getTeachers(){
    return this.teachers;
  }

  addTask(data:any){
    this.tasks.push(data)
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }
  
}
