import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/service/auth.service";
import { Role } from "src/app/core/models/role";
import { MatProgressButtonOptions } from "mat-progress-buttons";
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;
  error = "";
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  spinnerButtonOptions: MatProgressButtonOptions = {
    active: false,
    text: "Login",
    spinnerSize: 18,
    raised: true,
    stroked: false,
    buttonColor: "primary",
    spinnerColor: "accent",
    fullWidth: false,
    disabled: false,
    mode: "indeterminate",
    buttonIcon: {
      fontIcon: "favorite",
    },
  };
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: ["besho", Validators.required],
      password: ["123456789", Validators.required],
    });
  }
  get f() {
    return this.authForm.controls;
  }
  adminSet() {
    this.authForm.get("username").setValue("besho");
    this.authForm.get("password").setValue("123456789");
  }
  doctorSet() {
    this.authForm.get("username").setValue("doctor@hospital.org");
    this.authForm.get("password").setValue("doctor@123");
  }
  patientSet() {
    this.authForm.get("username").setValue("patient@hospital.org");
    this.authForm.get("password").setValue("patient@123");
  }
  onSubmit() {
    this.submitted = true;
    this.spinnerButtonOptions.active = true;
    this.error = "";
    if (this.authForm.invalid) {
      this.error = "يوجد خطأ في اسم المستخدم او كلمة المرور";
      return;
    } else {
      this.authService
        .login(this.f.username.value, this.f.password.value)
        .subscribe(
          (res) => {
            if (res) {
              setTimeout(() => {
                const role = this.authService.currentUserValue.role;
                if (role === Role.All || role === Role.Admin) {
                  this.router.navigate(["/admin/dashboard/main"]);
                } else if (role === Role.Doctor) {
                  this.router.navigate(["/doctor/dashboard"]);
                } else if (role === Role.Patient) {
                  this.router.navigate(["/patient/dashboard"]);
                } else {
                  this.router.navigate(["/authentication/signin"]);
                }
                this.spinnerButtonOptions.active = false;
              }, 100);
            } else {
              this.error = "خطأ في تسجيل الدخول";
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
