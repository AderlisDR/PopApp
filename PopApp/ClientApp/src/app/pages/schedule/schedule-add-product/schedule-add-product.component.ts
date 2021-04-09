import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { UserRole } from '../../../enums/user-role.enum';
import { Product } from '../../../models/product/product';
import { AuthService } from '../../../services/auth.service';
import { NotificationService } from '../../../services/notification.service';
import { ProductService } from '../../../services/product.service';
import { ScheduleService } from '../../../services/schedule.service';

@Component({
  selector: 'app-schedule-add-product',
  templateUrl: './schedule-add-product.component.html',
  styleUrls: ['./schedule-add-product.component.scss']
})
export class ScheduleAddProductComponent implements OnInit, OnChanges {
  @Input() freigthId: number;
  isLoading = true;
  isAdmin = false;
  isUser = false;
  availableProducts: Product[] = [];
  loadedProducts: Product[] = [];

  constructor(private authService: AuthService,
    private scheduleService: ScheduleService,
    private notificationService: NotificationService,
    private productService: ProductService) { }

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    this.isAdmin = currentUser.userRole === UserRole.Admin || currentUser.userRole === UserRole.Master;
    this.isUser = currentUser.userRole === UserRole.User;
    this.getProductLists();
  }

  ngOnChanges() {
    if (this.freigthId) {
      this.getProductLists();
    }
  }
  
  getProductLists() {
    if (this.isAdmin) {
      this.getAvailableProducts();
    }

    this.getLoadedProducts();
  }

  getAvailableProducts() {
    this.productService.GetAvailableProductsByFreigthId(this.freigthId).then((response: Product[]) => {
      this.availableProducts = response;
      this.isLoading = false;
    }).catch((error: HttpErrorResponse) => {
      this.isLoading = false;
      this.notificationService.showErrorMessage(error.error);
    });
  }

  getLoadedProducts() {
    this.scheduleService.GetScheduleContainerFreigthProducts(this.freigthId).then((response: Product[]) => {
      this.loadedProducts = response;
      this.isLoading = false;
    }).catch((error: HttpErrorResponse) => {
      this.isLoading = false;
      this.notificationService.showErrorMessage(error.error);
    });
  }

  drop(event: CdkDragDrop<Product[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (!this.loadedProducts.some(product => product.productId === event.previousContainer.data[event.previousIndex].productId)) {
        this.notificationService.showLoading();

        const request: { scheduleVesselContainerFreigthId: number, productId: number } = {
          scheduleVesselContainerFreigthId: this.freigthId,
          productId: event.previousContainer.data[event.previousIndex].productId
        };
  
        this.scheduleService.AddProductToScheduleVesselContainerFreigth(request).then(() => {
          copyArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex);

          this.notificationService.showSuccessMessage('Producto cargado con éxito.');
        }).catch((error: HttpErrorResponse) => {
          this.notificationService.showErrorMessage(error.error);
        });
      }
    }
  }

  removeProduct(product: Product): void {
    const index = this.loadedProducts.indexOf(product);

    if (index >= 0) {
      this.notificationService.showLoading();

      this.scheduleService.RemoveProductFromScheduleVesselContainerFreigth(this.freigthId, product.productId).then(() => {
        this.loadedProducts.splice(index, 1);
        this.notificationService.showSuccessMessage('Producto removido con éxito.');
      }).catch((error: HttpErrorResponse) => {
        this.notificationService.showErrorMessage(error.error);
      });
    }
  }
}
