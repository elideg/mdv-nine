import { AuthService } from './../../../../core-data/src/lib/auth/auth.service';
import { NotifyService } from '@mdv-nine/core-data';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'mdv-eight-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  userLogin = { email: '', password: '' }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private notify: NotifyService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  login() {
  this.userLogin = this.form.value
  if (this.form.invalid) {
      this.notify.notification('Complete fields with valid information')
    } else {
      this.authService.login(this.form.value)
    }
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    })
  }
}
