import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
  }

  createForm() {
		this.registerForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      school: [''],
			password: [''],
		})
  }

  authenticateUser() {
    this.authService.register(this.registerForm.value);
  }

}
