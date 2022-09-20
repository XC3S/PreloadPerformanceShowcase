import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponetModule } from './components/componets.modules';
import { HomeModule } from './pages/home.module';
import { ProductDetailModule } from './pages/product-detail/product-detail.module';
import { ProductsModule } from './pages/products/products.module';

const pageModules = [
  HomeModule,
  ProductsModule,
  ProductDetailModule,
  ComponetModule
]
  
@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    ...pageModules
  ],
  exports: [
    ...pageModules
  ]
})
export class PageModule { }
