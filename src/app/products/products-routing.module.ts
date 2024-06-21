import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';

const routes: Routes = [
  { path: '', component: ProductsPageComponent, children: [
    { path: '', component: ProductsListComponent },
    { path: ':id', component: ProductsDetailComponent }, 
    { path: '**', redirectTo: 'list' }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
