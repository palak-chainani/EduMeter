import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  teachers!: any;
  tasks!: any;
  subjectDetails!: any;

  constructor() {
    const savedTeachers = localStorage.getItem('teachers');
    const savedTasks = localStorage.getItem('tasks');
    const savedDetails = localStorage.getItem('subjectDetails');

    this.teachers = savedTeachers ? JSON.parse(savedTeachers) : [];
    this.tasks = savedTasks ? JSON.parse(savedTasks) : [];
    this.subjectDetails = savedDetails ? JSON.parse(savedDetails) : [];
  }

  // ========== TEACHERS ==========
  addNewTeacher(data: any) {
    this.teachers.push(data);
    localStorage.setItem('teachers', JSON.stringify(this.teachers));
  }

  getTeachers() {
    return this.teachers;
  }

  // ========== TASKS ==========
  addTask(data: any) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);

    const addnewSubject = {
      ...data,
      subjectName: data.subjectName,
    };

    this.subjectDetails.push(addnewSubject);
    localStorage.setItem('subjectDetails', JSON.stringify(this.subjectDetails));

    const taskWithTeacher = {
      ...data,
      assignedBy: currentUser.firstName + ' ' + currentUser.lastName
    };

    this.tasks.push(taskWithTeacher);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getTasks() {
    return this.tasks;
  }

  // ========== SUBJECT DETAILS ==========
  addsubjectDetails(data: any) {
    this.subjectDetails.push(data);
    localStorage.setItem('subjectDetails', JSON.stringify(this.subjectDetails));
  }

  getSubjectDetails() {
    return this.subjectDetails;
  }

  // ========== TEACHING SUMMARY ==========
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
