import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  teacherForm: FormGroup;

  subjects = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'Computer Science',
    'English'
  ];

  roles = ['teacher', 'hod', 'coordinator']; // ✅ Extra roles, optional

  constructor(
    private fb: FormBuilder,
    private databaseService: DatabaseService,
    private router: Router
  ) {
    // ✅ Updated form group with role
    this.teacherForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      role: ['', Validators.required], // ✅ NEW FIELD
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(data: any) {
    if (this.teacherForm.valid) {
      console.log('Teacher added:', this.teacherForm.value);

      //Add role along with other data to local storage or service
      this.databaseService.addNewTeacher(data);

      alert('Teacher added successfully!');

      //Redirect to teacher list or wherever you want
      this.router.navigate(['/admin/teachers']);
    } else {
      this.teacherForm.markAllAsTouched();
    }
  }

  onCancel(): void {
    if (confirm('Discard changes?')) {
      this.router.navigate(['/admin/teachers']);
    }
  }
}
