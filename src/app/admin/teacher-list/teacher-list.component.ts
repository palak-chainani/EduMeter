import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Teacher {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
}

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  teachers: Teacher[] = [
    { id: 1, firstName: 'dolly', lastName: 'mangwani', email: 'dolly@gmail.com', subject: 'Mathematics' },
    { id: 2, firstName: 'palak', lastName: 'chainani', email: 'palak@gmail.com', subject: 'Physics' },
    // { id: 3, firstName: 'Robert', lastName: 'Johnson', email: 'robert.j@school.edu', subject: 'Computer Science' },
    // { id: 4, firstName: 'Emily', lastName: 'Williams', email: 'emily.w@school.edu', subject: 'English' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // In a real app, you would fetch teachers from a service here
    // this.teacherService.getTeachers().subscribe(teachers => this.teachers = teachers);
  }

  navigateToAddTeacher(): void {
    this.router.navigate(['/admin/add-teacher']);
  }

  editTeacher(id: number): void {
    this.router.navigate(['/admin/edit-teacher', id]);
  }

  deleteTeacher(id: number): void {
    if (confirm('Are you sure you want to delete this teacher?')) {
      // In a real app, you would call a service to delete the teacher
      this.teachers = this.teachers.filter(teacher => teacher.id !== id);
      console.log(`Teacher with ID ${id} deleted`);
    }
  }
}