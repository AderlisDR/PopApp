import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationService } from '../../services/navigation.service';
import { IMenuItem } from '../../models/layout/sidebar-menu/menu-item';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit, OnDestroy {
  private menuItemsSub: Subscription;
  menuItems: IMenuItem[];

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.menuItemsSub = this.navigationService.menuItems$.subscribe((items: IMenuItem[]) => {
      this.menuItems = items;
    });

    this.navigationService.publishNavigation();
  }

  ngOnDestroy() {
    if (this.menuItemsSub) {
      this.menuItemsSub.unsubscribe();
    }
  }
}
