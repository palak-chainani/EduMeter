import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  teachers: any[] = [];
  tasks: any[] = [];
  subjectDetails: any[] = [];

  constructor() {
    const savedTeachers = localStorage.getItem('teachers');
    const savedTasks = localStorage.getItem('tasks');
    const savedDetails = localStorage.getItem('subjectDetails');

    this.teachers = savedTeachers ? JSON.parse(savedTeachers) : [];
    this.tasks = savedTasks ? JSON.parse(savedTasks) : [];
    this.subjectDetails = savedDetails ? JSON.parse(savedDetails) : [];
  }

  // ✅ Teacher
  addNewTeacher(data: any) {
    this.teachers.push(data);
    localStorage.setItem('teachers', JSON.stringify(this.teachers));
  }

  getTeachers() {
    return this.teachers;
  }

  // ✅ Subject Details
  getSubjectDetails() {
    return this.subjectDetails;
  }

  addsubjectDetails(data: any) {
    this.subjectDetails.push(data);
    localStorage.setItem('subjectDetails', JSON.stringify(this.subjectDetails));
  }

  // ✅ Add Task
  addTask(data: any) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);

    const taskWithMeta = {
      ...data,
      assignedBy: `${currentUser.firstName} ${currentUser.lastName}`,
      status: 'Pending',   // default
      hours: 0             // default
    };

    this.tasks.push(taskWithMeta);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getTasks() {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  }

  deleteTask(taskToDelete: any) {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = savedTasks.filter(
      (task: any) =>
        !(
          task.subject === taskToDelete.subject &&
          task.date === taskToDelete.date &&
          task.time === taskToDelete.time &&
          task.assignedBy === taskToDelete.assignedBy
        )
    );
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    this.tasks = updatedTasks;
  }

  // ✅ Edit flow
  setTaskToEdit(task: any) {
    localStorage.setItem('taskToEdit', JSON.stringify(task));
  }

  getTaskToEdit() {
    const task = localStorage.getItem('taskToEdit');
    return task ? JSON.parse(task) : null;
  }

  clearTaskToEdit() {
    localStorage.removeItem('taskToEdit');
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

  saveTeachingSummary(summary: any) {
    localStorage.setItem('teachingSummaryData', JSON.stringify(summary));
  }

  getTeachingSummary() {
    const saved = localStorage.getItem('teachingSummaryData');
    return saved ? JSON.parse(saved) : null;
  }

  clearTeachingSummary() {
    localStorage.removeItem('teachingSummaryData');
  }
}
