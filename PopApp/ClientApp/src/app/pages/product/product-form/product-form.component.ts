import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../../models/product/product';
import { NotificationService } from '../../../services/notification.service';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    public dialogRef: MatDialogRef<ProductFormComponent>,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.formBuild();
  }

  private formBuild() {
    this.productForm = this.formBuilder.group({
      productName: ['', [Validators.required]],
      productDescription: ['', [Validators.required]],
      productCategory: ['', [Validators.required]],
    }
    );
  }

  createProduct() {
    let product: Product = {
      productName: this.productForm.controls.productName.value,
      productCategory: this.productForm.controls.productCategory.value,
      productDescription: this.productForm.controls.productDescription.value
    }

    this.productService.PostProduct(product).then(() => {
      this.notificationService.showSuccessMessage('Producto registrado con éxito.');
      this.productForm.reset();
      this.dialogRef.close(true);
    }).catch((error: HttpErrorResponse) => {
      this.notificationService.showErrorMessage(error.error);
    });
  }

}
