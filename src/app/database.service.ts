import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  teachers: any[] = [];
  tasks: any[] = [];
  subjectDetails!: any;
  taskToEdit: any = null;

  constructor() {
    const savedTeachers = localStorage.getItem('teachers');
    const savedTasks = localStorage.getItem('tasks');
    this.teachers = savedTeachers ? JSON.parse(savedTeachers) : [];
    this.tasks = savedTasks ? JSON.parse(savedTasks) : [];  }
  addNewTeacher(data: any) {
    this.teachers.push(data);
    localStorage.setItem('teachers', JSON.stringify(this.teachers));
  }
  getTeachers() {
    return this.teachers;
  }

 
  getTasks() {
    // Hamesha fresh localStorage se read karo
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  }
  addTask(data: any) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    const addnewSubject = {
      ...data,
      subjectName: data.subjectName,
    };

    this.subjectDetails.push(addnewSubject);
    localStorage.setItem('subjectDetails', JSON.stringify(this.subjectDetails));
    const taskWithMeta = {
      ...data,
      assignedBy: `${currentUser.firstName} ${currentUser.lastName}`,
      status: 'Pending',
      hours: 0 // 
    };
    const taskWithTeacher = {
      ...data,
      assignedBy: currentUser.firstName + ' ' + currentUser.lastName
    };
    this.tasks.push(taskWithMeta);
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


  setTaskToEdit(task: any) {
    localStorage.setItem('taskToEdit', JSON.stringify(task));
  }
  addsubjectDetails(data: any) {
    this.subjectDetails.push(data);
    localStorage.setItem('subjectDetails', JSON.stringify(this.subjectDetails));
  }
  getTaskToEdit() {
    const task = localStorage.getItem('taskToEdit');
    return task ? JSON.parse(task) : null;
  }

  clearTaskToEdit() {
    localStorage.removeItem('taskToEdit');
  }

  
  getSubjectDetails() {
  const savedDetails = localStorage.getItem('subjectDetails');
  return savedDetails ? JSON.parse(savedDetails) : [];
}

  saveTeachingSummary(summary: any) {
    localStorage.setItem('teachingSummaryData', JSON.stringify(summary));
  }

  updateTask(updatedTask: any) {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    const index = tasks.findIndex(
      (t: any) =>
        t.subject === updatedTask.subject &&
        t.date === updatedTask.date &&
        t.time === updatedTask.time &&
        t.assignedBy === updatedTask.assignedBy
    );

    if (index !== -1) {
      tasks[index] = {
        ...tasks[index],
        ...updatedTask
      };
      localStorage.setItem('tasks', JSON.stringify(tasks));
      this.tasks = tasks;
    }   
  }
clearTeachingSummary() {
    localStorage.removeItem('teachingSummaryData');
  }
}
