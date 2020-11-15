import { NgModule } from '@angular/core';
import { DropdownAnchorDirective } from './directives/dropdown-anchor.directive';
import { DropdownLinkDirective } from './directives/dropdown-link.directive';
import { AppDropdownDirective } from './directives/dropdown.directive';

const directives = [
    DropdownLinkDirective,
    AppDropdownDirective,
    DropdownAnchorDirective
];

@NgModule({
    declarations: directives,
    imports: [],
    exports: directives,
    providers: []
})
export class SharedModule { }
