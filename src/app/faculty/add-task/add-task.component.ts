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
  taskToEdit: any = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private databaseService: DatabaseService
  ) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      subject: ['', Validators.required],
      type: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      description: ['']
    });

    this.taskToEdit = this.databaseService.getTaskToEdit();
    if (this.taskToEdit) {
      this.isEditMode = true;
      this.taskForm.patchValue({
        subject: this.taskToEdit.subject,
        type: this.taskToEdit.type,
        date: this.taskToEdit.date,
        time: this.taskToEdit.time,
        description: this.taskToEdit.description
      });
    }
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const formValue = this.taskForm.value;

      if (this.isEditMode) {
        const updatedTask = {
          ...this.taskToEdit,
          ...formValue
        };
        this.databaseService.updateTask(updatedTask);
        this.databaseService.clearTaskToEdit();
      } else {
        this.databaseService.addTask(formValue);
      }

      this.router.navigate(['/faculty/task-log']);
    }
  }
}
