import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
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

  onSubmit(): void {
    if (this.taskForm.valid) {
      // Here you would typically send the data to your backend service
      const formData = this.taskForm.value;
      console.log('Form submitted:', formData);
      
      // Combine date and time into a single datetime string if needed
      const taskDateTime = `${formData.date}T${formData.time}`;
      console.log('Combined datetime:', taskDateTime);

      // Reset form after submission
      this.taskForm.reset();
      
      // Navigate back to dashboard or show success message
      this.router.navigate(['/faculty/dashboard']);
      
      // You could also add a success notification here
      alert('Task added successfully!');
    } else {
      // Mark all fields as touched to show validation messages
      this.markFormGroupTouched(this.taskForm);
    }
  }

  onCancel(): void {
    if (confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      this.router.navigate(['/faculty/dashboard']);
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