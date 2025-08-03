import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private databaseService: DatabaseService, private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const{email, password} = this.loginForm.value

      const matchedUser = this.databaseService.teachers.find((user:any)=> user.email === email && user.password === password)
      
      // Save current user in localStorage
      if(matchedUser){
        localStorage.setItem('currentUser', JSON.stringify(matchedUser))
      }

      if(matchedUser.role === 'admin')
        this.router.navigate(['admin/admin-dashboard'])
      else if(matchedUser.role === 'teacher')
        this.router.navigate(['faculty/faculty-dashboard'])
      else {
        alert('Invalid credentials! Please try again.');
      }
    } else {
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
