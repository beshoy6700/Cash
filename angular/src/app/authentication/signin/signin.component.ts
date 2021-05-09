import { AuthService } from './../../shared/security/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from './../../shared/security/role';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  error = '';
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['admin@hospital.org', Validators.required],
      password: ['admin@123', Validators.required],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  adminSet() {
    this.loginForm.get('username').setValue('admin@hospital.org');
    this.loginForm.get('password').setValue('admin@123');
  }
  doctorSet() {
    this.loginForm.get('username').setValue('doctor@hospital.org');
    this.loginForm.get('password').setValue('doctor@123');
  }
  patientSet() {
    this.loginForm.get('username').setValue('patient@hospital.org');
    this.loginForm.get('password').setValue('patient@123');
  }
  onSubmit() {
    this.submitted = true;
    this.error = '';
    if (this.loginForm.invalid) {
      this.error = 'Username and Password not valid !';
      return;
    } else {
      this.authService
        .login(this.f.username.value, this.f.password.value)
        .subscribe(
          (res) => {
            if (res.success) {
              const role = this.authService.getRole();

              if (role === Role.All || role === Role.Admin) {
                this.router.navigate(['/admin/dashboard/main']);
              } else if (role === Role.Doctor) {
                this.router.navigate(['/doctor/dashboard']);
              } else if (role === Role.Patient) {
                this.router.navigate(['/patient/dashboard']);
              } else {
                this.router.navigate(['/authentication/signin']);
              }
            } else {
              this.error = 'Invalid Login';
            }
          },
          (error) => {
            this.error = error;
            this.submitted = false;
          }
        );
    }
  }
}
