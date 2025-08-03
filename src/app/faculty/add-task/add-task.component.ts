import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private databaseService: DatabaseService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
this.taskForm = this.fb.group({
  subject: ['', [Validators.required, Validators.maxLength(100)]],
  type: ['', Validators.required],
  date: ['', Validators.required],
  time: ['', Validators.required],
  description: ['', [Validators.maxLength(500)]],
  lectures: [''],
  practicals: [''],
  hours: ['']
});



    // Set default date to today
    const today = new Date().toISOString().split('T')[0];
    this.taskForm.patchValue({ date: today });
  }

  onSubmit(data: any): void {
  console.log(this.taskForm.value);

  if (this.taskForm.valid) {
    // 1. Save to database (your original logic)
    this.databaseService.addTask(data);

    // 2. Save to localStorage
   const taskToAdd = {
  subject: data.subject,
  type: data.type,
  date: data.date,
  time: data.time,
  description: data.description,
  lectures: data.lectures || '', 
  practicals: data.practicals || '',
  hours: data.hours || ''
};


    const existingTasks = JSON.parse(localStorage.getItem('facultyTasks') || '[]');
    existingTasks.push(taskToAdd);
    localStorage.setItem('facultyTasks', JSON.stringify(existingTasks));
    this.taskForm.reset();

    const today = new Date().toISOString().split('T')[0];
    this.taskForm.patchValue({ date: today });

    alert('Task added successfully!');
  } else {
    this.markFormGroupTouched(this.taskForm);
  }
}
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  get subject() { return this.taskForm.get('subject'); }
  get type() { return this.taskForm.get('type'); }
  get date() { return this.taskForm.get('date'); }
  get time() { return this.taskForm.get('time'); }
  get description() { return this.taskForm.get('description'); }
}