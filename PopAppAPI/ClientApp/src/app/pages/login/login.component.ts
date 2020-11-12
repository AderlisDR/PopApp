import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from 'src/app/models/account/login-request';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.authService.logout();
    this.buildForm();
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public onSubmit() {
    this.showLoading();
    this.getToken();
  }

  private showLoading(): void {
    Swal.fire({
      title: 'Enviando...',
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });
  }

  private getToken(): void {
    const request: LoginRequest = this.loginForm.getRawValue();
    this.authService.getToken(request).then((response: {token: string}) =>{
      this.closeLoading();
      this.authService.login(response.token);
    }).catch((error: HttpErrorResponse) => {
      this.showError(error.error);
    });
  }

  private closeLoading(): void {
    Swal.close();
  }

  private showError(message: string): void {
    Swal.fire({
      title: message,
      icon: 'error',
    });
  }
}
