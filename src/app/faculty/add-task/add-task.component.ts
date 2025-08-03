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
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private databaseService: DatabaseService
  ) {}

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



    
    const taskToEdit = this.databaseService.getTaskToEdit();

    if (taskToEdit) {
      this.isEditMode = true;

      this.taskForm.patchValue({
        subject: taskToEdit.subject,
        type: taskToEdit.type,
        date: new Date(taskToEdit.date).toISOString().substring(0, 10),
        time: taskToEdit.time,
        description: taskToEdit.description
      });

    } else {
      const today = new Date().toISOString().split('T')[0];
      this.taskForm.patchValue({ date: today });
    }
  }

  onSubmit(data: any): void {
    if (this.taskForm.valid) {
      if (this.isEditMode) {
        this.databaseService.updateTask(data);
        this.databaseService.clearTaskToEdit();
        alert('Task updated successfully!');
      } else {
        this.databaseService.addTask(data);
        alert('Task added successfully!');
      }

      this.taskForm.reset();
      this.router.navigate(['/faculty/task-log']);
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

  get subject()
     { return this.taskForm.get('subject'); }
  get type()  
    { return this.taskForm.get('type'); }
  get date()
     { return this.taskForm.get('date'); }
  get time()
     { return this.taskForm.get('time'); }
  get description()
     { return this.taskForm.get('description'); }
}
