import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Ability } from '@casl/ability';
import { BehaviorSubject } from 'rxjs';
import { CurrentUser } from '../models/account/current-user';
import { LoginRequest } from '../models/account/login-request';
import { createAbilityFor } from './functions/create-ability-for.function';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUserSubject = new BehaviorSubject(this.getCurrentUser());

  constructor(@Inject('BASE_URL') private baseUrl: string,
    private router: Router,
    private jwtHelper: JwtHelperService,
    private http: HttpClient,
    private ability: Ability) {
    if (this.isAuthenticated()) {
      this.updateAbilityRulesAndCurrentUserSubject();
    }
  }

  private updateAbilityRulesAndCurrentUserSubject(): void {
    this.currentUserSubject.next(this.getCurrentUser());
    this.ability.update(createAbilityFor(this.getCurrentUser().userRole));
  }

  public logout() {
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
    this.ability.update([]);
    this.router.navigateByUrl('/login');
  }

  public getToken(request: LoginRequest): Promise<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.baseUrl}api/accounts`, request).toPromise();
  }

  public login(token: string) {
    localStorage.setItem('token', token);
    this.updateAbilityRulesAndCurrentUserSubject();
    this.router.navigateByUrl('/dashboard');
  }

  public isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired(localStorage.getItem('token'));
  }

  public getCurrentUser(): CurrentUser {
    return this.jwtHelper.decodeToken(localStorage.getItem('token')) as CurrentUser;
  }
}
