import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponetModule } from 'src/app/components/componets.modules';
import { ProductsComponent } from './products.component';

const impex = [
    ProductsComponent
];

@NgModule({
  declarations: [
    ...impex,
  ],
  imports: [CommonModule, ComponetModule],
  exports: [
    ...impex
  ]
})
export class ProductsModule { }
