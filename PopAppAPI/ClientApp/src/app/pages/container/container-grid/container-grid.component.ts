import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserRole } from '../../../enums/user-role.enum';
import { Container } from '../../../models/container/container';
import { AuthService } from '../../../services/auth.service';
import { ContainerService } from '../../../services/container.service';
import { NotificationService } from '../../../services/notification.service';
import { ContainerFormComponent } from '../container-form/container-form.component';

@Component({
  selector: 'app-container-grid',
  templateUrl: './container-grid.component.html',
  styleUrls: ['./container-grid.component.scss']
})
export class ContainerGridComponent implements OnInit {
  isAdmin = false;
  isLoading = true;
  containerData: Container[];

  constructor(private containerService: ContainerService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    this.isAdmin = currentUser.userRole === UserRole.Admin || currentUser.userRole === UserRole.Master;
    this.onGetContainers();
  }

  onGetContainers() {
    this.isLoading = true;
    this.containerService.GetContainers().then((resp: Container[]) => {
        this.containerData = [...resp];
        this.isLoading = false;
    }).catch((error: HttpErrorResponse) => {
      this.notificationService.showErrorMessage(error.error);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContainerFormComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe((result: number) => {
      if (result) {
        this.onGetContainers();
      }
    });
  }
}
