import { IChildItem } from './child-item';

export interface IMenuItem {
    type: string; // Possible values: link/dropDown/separator/extLink
    name?: string; // Used as display text for item and title for separator type
    state?: string; // Router state
    icon?: string; // Material icon name
    tooltip?: string; // Tooltip text
    disabled?: boolean; // If true, item will not be appeared in sidenav.
    sub?: IChildItem[]; // Dropdown items
}
