import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponetModule } from 'src/app/components/componets.modules';
import { ProductDetailComponent } from './product-detail.component';

const impex = [
  ProductDetailComponent
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
export class ProductDetailModule { }
