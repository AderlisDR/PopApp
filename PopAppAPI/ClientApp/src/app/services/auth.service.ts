import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CurrentUser } from '../models/account/current-user';
import { LoginRequest } from '../models/account/login-request';

@Injectable()
export class AuthService {

    constructor(@Inject('BASE_URL') private baseUrl: string,
        private router: Router,
        private jwtHelper: JwtHelperService,
        private http: HttpClient) { }

    public logout() {
        localStorage.removeItem('token');
        this.router.navigateByUrl('/login');
    }

    public getToken(request: LoginRequest): Promise<{token: string}> {
        return this.http.post<{token: string}>(`${this.baseUrl}api/accounts`, request).toPromise();
    }

    public login(token: string) {
        localStorage.setItem('token', token);
        this.router.navigateByUrl('/counter');
    }

    public isAuthenticated(): boolean {
        return !this.jwtHelper.isTokenExpired(localStorage.getItem('token'));
    }

    public getCurrentUser(): CurrentUser {
        return this.jwtHelper.decodeToken(localStorage.getItem('token')) as CurrentUser;
    }
}
