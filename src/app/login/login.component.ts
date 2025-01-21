import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: any;
  loggedIn: boolean = false;
  notValid: boolean = false;
  comp_ID: any;
  errorMsg: any;
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    // private api: ApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginValidation();
  }

  loginValidation() {
    this.loginForm = this.fb.group({
      company_email: ['', Validators.compose([Validators.required, Validators.email])],
      company_password: ['', Validators.required],
    });
  }

  submitLogin() {
    // if (this.loginForm.valid) {
    //   let param = this.loginForm.value;
    //   this._as.userPost('login', param).subscribe((res: any) => {
    //     console.log(res);
    //     this.loader = false;
    //     if (res && !res.error) {
    //       this._as.obNotify({
    //         status: 'success',
    //         message: res.message,
    //         start: true,
    //         code: res.code
    //       })
    //       localStorage.setItem('token', res.response.token);
    //       localStorage.setItem('comp_id', res.response.comp_id);
    //       localStorage.setItem('logged_in', 'true');
    //       this.router.navigate(['/admin/dashboard']);
    //     }
    //   })
    // } 
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
    }
  }
}
