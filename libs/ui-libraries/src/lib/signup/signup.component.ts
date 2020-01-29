import { NotifyService } from 'libs/core-data/src/lib/notify.service';
import { Router } from '@angular/router';
import { AuthService } from './../../../../core-data/src/lib/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'mdv-nine-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;


  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private notify: NotifyService
  ) { }

  ngOnInit() {
    this.initForm()
  }

  goToLogin() {
    this.router.navigate(['/login'])
  }

  signUp() {
    if(this.form.invalid) {
      this.notify.notification('Enter valid email & password')
    } else {
    this.authService.signUp(this.form.value).subscribe();
    this.router.navigate(['/login'])
    }
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    })
  }
}
