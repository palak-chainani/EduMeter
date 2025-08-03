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
      description: ['', [Validators.maxLength(500)]]
    });

    // Set default date to today
    const today = new Date().toISOString().split('T')[0];
    this.taskForm.patchValue({ date: today });
  }

  onSubmit(data:any): void {
    console.log(this.taskForm.value)
    if (this.taskForm.valid) {
      this.databaseService.addTask(data);

      // Reset form after submission
      this.taskForm.reset();
      
      alert('Task added successfully!');
    } else {
      // Mark all fields as touched to show validation messages
      this.markFormGroupTouched(this.taskForm);
    }
  }


  // Helper method to mark all form fields as touched
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Convenience getters for easy access in template
  get subject() { return this.taskForm.get('subject'); }
  get type() { return this.taskForm.get('type'); }
  get date() { return this.taskForm.get('date'); }
  get time() { return this.taskForm.get('time'); }
  get description() { return this.taskForm.get('description'); }
}