import { Component } from '@angular/core';

interface Task {
  id: number;
  teacherName: string;
  teacherEmail: string;
  subject: string;
  type: 'Lecture' | 'Practical' | 'Meeting';
  quantity: number;
  status: 'Pending' | 'Approved' | 'Rejected';
  rejectionReason?: string;
}

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent {
  tasks: Task[] = [
    {
      id: 1,
      teacherName: 'John Doe',
      teacherEmail: 'john.doe@school.edu',
      subject: 'Mathematics',
      type: 'Lecture',
      quantity: 4,
      status: 'Pending'
    },
    {
      id: 2,
      teacherName: 'Jane Smith',
      teacherEmail: 'jane.smith@school.edu',
      subject: 'Physics',
      type: 'Practical',
      quantity: 2,
      status: 'Pending'
    },
    {
      id: 3,
      teacherName: 'Robert Johnson',
      teacherEmail: 'robert.j@school.edu',
      subject: 'Computer Science',
      type: 'Meeting',
      quantity: 1,
      status: 'Approved'
    },
    {
      id: 4,
      teacherName: 'Sarah Williams',
      teacherEmail: 'sarah.w@school.edu',
      subject: 'Chemistry',
      type: 'Lecture',
      quantity: 3,
      status: 'Rejected',
      rejectionReason: 'Exceeds maximum allowed lectures'
    }
  ];

  showRejectModal = false;
  rejectionReason = '';
  selectedTaskId: number | null = null;

  approveTask(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.status = 'Approved';
      task.rejectionReason = undefined;
    }
  }

  openRejectModal(task: Task) {
    this.selectedTaskId = task.id;
    this.rejectionReason = task.rejectionReason || '';
    this.showRejectModal = true;
  }

  cancelReject() {
    this.showRejectModal = false;
    this.selectedTaskId = null;
    this.rejectionReason = '';
  }

  confirmReject() {
    if (this.selectedTaskId && this.rejectionReason.trim()) {
      const task = this.tasks.find(t => t.id === this.selectedTaskId);
      if (task) {
        task.status = 'Rejected';
        task.rejectionReason = this.rejectionReason;
      }
      this.cancelReject();
    }
  }

  viewDetails(taskId: number) {
    // Implement view details logic
    console.log('Viewing details for task:', taskId);
  }
}