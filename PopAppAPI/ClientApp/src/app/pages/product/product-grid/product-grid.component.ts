import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserRole } from '../../../enums/user-role.enum';
import { Product } from '../../../models/product/product';
import { AuthService } from '../../../services/auth.service';
import { NotificationService } from '../../../services/notification.service';
import { ProductService } from '../../../services/product.service';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {
  isAdmin = false;
  isLoading = true;
  productData: Product[];
  groupPanelTexts = {
    groupByThisColumn: 'Agrupar por esta columna',
    groupContinuedMessage: 'Continuación desde la página anterior',
    groupContinuesMessage: 'Continúa en la siguiente página'
  };

  constructor(private productServices: ProductService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    this.isAdmin = currentUser.userRole === UserRole.Admin || currentUser.userRole === UserRole.Master;
    this.onGetProducts();
  }

  onExport() { }

  onGetProducts() {
    this.productServices.GetProducts().then((response: Product[]) => {
      this.productData = response;
      this.isLoading = false;
    }).catch((error: HttpErrorResponse) => {
      this.isLoading = false;
      this.notificationService.showErrorMessage(error.error);
    });
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(ProductFormComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.onGetProducts();
      }
    });
  }

}
