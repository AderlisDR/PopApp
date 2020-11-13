import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-fixed-navbar',
  templateUrl: './fixed-navbar.component.html',
  styleUrls: ['./fixed-navbar.component.css']
})
export class FixedNavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
