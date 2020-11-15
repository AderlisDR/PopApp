import { Injectable } from '@angular/core';
import { Ability } from '@casl/ability';
import { BehaviorSubject } from 'rxjs';
import { IMenuItem } from '../models/layout/sidebar-menu/menu-item';

@Injectable()
export class NavigationService {
    iconMenu: IMenuItem[] = [
        {
            type: 'separator',
            name: ''
        },
        {
            name: 'Counter',
            type: 'link',
            icon: 'add_circle',
            state: 'counter'
        },
        {
            name: 'Fetch Data',
            type: 'link',
            icon: 'api',
            state: 'fetch-data'
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
