import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';

const impex = [
    ProductsComponent
];

@NgModule({
  declarations: [
    ...impex,
  ],
  imports: [CommonModule],
  exports: [
    ...impex
  ]
})
export class ProductsModule { }
