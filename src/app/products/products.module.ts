import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { StartsWithPipe } from '../starts-with.pipe';
import { StarComponent } from '../star-component/star-component.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {ProductDetailGuardGuard} from '../product-detail/product-detail-guard.guard';
import { AddingSpacePipe } from '../adding-space.pipe';

@NgModule({
  imports: [
    CommonModule,FormsModule,RouterModule.forChild([
      { path: 'product', component: ProductListComponent },
      { path: 'product/:id',canActivate:[ProductDetailGuardGuard], component: ProductDetailComponent}
    ])
  ],
  declarations: [ProductDetailComponent,ProductListComponent,StartsWithPipe,StarComponent,AddingSpacePipe]
})
export class ProductsModule { }
