import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.createForm();
  }

  ngOnInit() {
    console.log(this.authService.loggedIn());
  }

  createForm() {
		this.loginForm = this.fb.group({
			username: [''],
			password: [''],
		})
	}

  authenticateUser() {
    this.authService.authenticateUser(this.loginForm.value);
  }

}
