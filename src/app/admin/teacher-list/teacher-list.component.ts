import { Component } from '@angular/core';

interface Teacher {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent {
  teachers: Teacher[] = [
    { 
      id: 1, 
      firstName: 'John', 
      lastName: 'Doe', 
      email: 'john.doe@school.edu', 
      subject: 'Mathematics',
      status: 'Approved'
    },
    { 
      id: 2, 
      firstName: 'Jane', 
      lastName: 'Smith', 
      email: 'jane.smith@school.edu', 
      subject: 'Physics',
      status: 'Pending'
    },
    { 
      id: 3, 
      firstName: 'Robert', 
      lastName: 'Johnson', 
      email: 'robert.j@school.edu', 
      subject: 'Computer Science',
      status: 'Rejected'
    }
  ];

  getStatusClass(status: string): string {
    return `status-${status.toLowerCase()}`;
  }

  updateStatus(teacherId: number, newStatus: 'Approved' | 'Rejected'): void {
    const teacher = this.teachers.find(t => t.id === teacherId);
    if (teacher) {
      teacher.status = newStatus;
      // In a real app, you would call a service to update the status
      console.log(`Updated teacher ${teacherId} status to ${newStatus}`);
    }
  }

  navigateToAddTeacher(): void {
    console.log('Navigate to add teacher');
    // Implement navigation
  }

  editTeacher(id: number): void {
    console.log('Edit teacher', id);
    // Implement edit
  }

  deleteTeacher(id: number): void {
    if (confirm('Are you sure you want to delete this teacher?')) {
      this.teachers = this.teachers.filter(teacher => teacher.id !== id);
      console.log('Deleted teacher', id);
    }
  }
}