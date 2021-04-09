import { UserRole } from '../../enums/user-role.enum';

export interface CurrentUser {
    userId: number;
    username: string;
    email: string;
    userRole: UserRole;
}