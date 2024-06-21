import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { Product } from '../../../product.model';
import { Observable } from 'rxjs';
import { ProductState } from '../../state/products.state';
import { AddProduct, DeleteProduct, LoadProducts, UpdateProduct } from '../../state/products.actions';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit {
  private store = inject(Store)

  products$: Observable<Product[]> = this.store.select(ProductState.getProducts);

  ngOnInit() {
    this.store.dispatch(new LoadProducts())
  }

  updateProduct(product: Product) {
    const updatedProduct = { ...product, price: product.price + 1 };
    this.store.dispatch(new UpdateProduct(updatedProduct))
  }

  addProduct() {
    const newProduct: Product = {
      id: Math.floor(Math.random() * 1000),
      name: 'Nuevo Producto',
      price: 15.99,
      description: 'Descripción del nuevo producto'
    };
    this.store.dispatch(new AddProduct(newProduct));
  }

  deleteProduct(id: number) {
    this.store.dispatch(new DeleteProduct(id));
  }



}
