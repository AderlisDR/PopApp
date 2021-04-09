import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Ability } from '@casl/ability';

@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate {

    constructor(private router: Router,
        private ability: Ability) { }

    canActivate(activatedRoute: ActivatedRouteSnapshot): boolean {
        if (this.ability.can('navigate', 'all') || this.ability.can('navigate', activatedRoute.routeConfig.path)) {
            return true;
        } else {
            this.router.navigateByUrl('/not-found');
            return false;
        }
    }
}
