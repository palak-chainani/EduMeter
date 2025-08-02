import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  teacherForm!: FormGroup;
  subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'English'];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.teacherForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.teacherForm.valid) {
      console.log('Form submitted:', this.teacherForm.value);
      // Here you would typically call a service to add the teacher
      this.router.navigate(['/admin/teachers']);
    }
  }

  onCancel(): void {
    if (confirm('Are you sure you want to cancel? All unsaved changes will be lost.')) {
      this.router.navigate(['/admin/teachers']);
    }
  }
}