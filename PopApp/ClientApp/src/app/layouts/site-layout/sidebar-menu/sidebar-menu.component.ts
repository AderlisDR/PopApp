import { Component, Input, OnInit } from '@angular/core';
import { IMenuItem } from '../../../models/layout/sidebar-menu/menu-item';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {
  @Input() public menuItems: IMenuItem[] = [];

  constructor() { }

  ngOnInit() {
  }
}
