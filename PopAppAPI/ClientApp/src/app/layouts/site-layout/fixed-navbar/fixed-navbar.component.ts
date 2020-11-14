import { Component, OnInit } from '@angular/core';
import { CurrentUser } from '../../../models/account/current-user';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-fixed-navbar',
  templateUrl: './fixed-navbar.component.html',
  styleUrls: ['./fixed-navbar.component.css']
})
export class FixedNavbarComponent implements OnInit {
  currentUser: CurrentUser;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }

  logout() {
    this.authService.logout();
  }
}
