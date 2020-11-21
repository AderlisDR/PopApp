import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product/product';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {

  productData: Product[];
  groupPanelTexts = {
    groupByThisColumn: 'Agrupar por esta columna',
    groupContinuedMessage: 'Continuación desde la página anterior',
    groupContinuesMessage: 'Continúa en la siguiente página'
  };

  constructor(private productServices: ProductService) { }

  ngOnInit() {
  }

  onExport(){}

  onGetProducts(){
    this.productServices.GetProducts().then((resp: Product[])=>{
      this.productData = [...resp];
    }).catch(err =>{});
  }

}
