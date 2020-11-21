import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from '../../models/product/product';
declare let Swal: any;

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder , private productService: ProductService) { }

  ngOnInit() {
    this.formBuild();
  }

  private formBuild(){
    this.productForm = this.formBuilder.group(
      {
        productName: new FormControl('' , Validators.required),
        productDescription: new FormControl('' , Validators.required),
        productCategory: new FormControl('' , Validators.required),
      }
    );
  }

  createProduct(){
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Save!'
    }).then((result) => {
      this.productForm.reset();
      if (result.isConfirmed) {

        let product: Product = {
           productName: this.productForm.controls.productName.value,
           productCategory: this.productForm.controls.productCategory.value,
           productDescription: this.productForm.controls.productDescription.value
        }

        this.productService.PostProduct(product).then(resp =>{}).catch(err =>{});

        Swal.fire(
          'Complete!',
          'Your file has been Saved.',
          'success'
        )
      }
    })

  }

}
