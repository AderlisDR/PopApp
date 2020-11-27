import { Injectable } from '@angular/core';
import { Ability } from '@casl/ability';
import { BehaviorSubject } from 'rxjs';
import { IMenuItem } from '../models/layout/sidebar-menu/menu-item';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  iconMenu: IMenuItem[] = [
    {
      name: 'Dashboards',
      type: 'link',
      icon: 'dashboard',
      state: 'dashboard'
    },
    {
      name: 'Compañías',
      type: 'link',
      icon: 'apartment',
      state: 'company'
    },
    {
      name: 'Contenedores',
      type: 'link',
      icon: 'archive',
      state: 'container'
    },
    {
      name: 'Documentos',
      type: 'link',
      icon: 'attachment',
      state: 'document'
    },
    {
      name: 'Carga',
      type: 'link',
      icon: 'backpack',
      state: 'freigth'
    },
    {
      name: 'Productos',
      type: 'link',
      icon: 'category',
      state: 'product'
    },
    {
      name: 'Usuarios',
      type: 'link',
      icon: 'group',
      state: 'user'
    },
    {
      name: 'Buques',
      type: 'link',
      icon: 'directions_boat',
      state: 'vessel'
    }
  ];
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  menuItems$ = this.menuItems.asObservable();

  constructor(private ability: Ability) { }

  publishNavigation() {
    let menus: IMenuItem[];

    if (this.ability.can('see', 'all')) {
      menus = this.iconMenu;
    } else {
      menus = this.iconMenu.filter(menuItem => this.ability.can('see', menuItem.name));
    }

    this.menuItems.next(menus);
  }
}
