import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    // Initialize the FormGroup with FormControls and validators
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Login form submitted successfully!');
      console.log(this.loginForm.value);
    } else {
      console.log('Form is invalid. Please check the fields.');
      this.loginForm.markAllAsTouched();
    }
  }
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}

