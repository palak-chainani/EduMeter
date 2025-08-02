import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  taskForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.taskForm = this.fb.group({
      subject: ['', Validators.required],
      time: ['', Validators.required],
      type: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      console.log(this.taskForm.value);
    }
  }

}
