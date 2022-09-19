import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './pages/home.module';
import { ProductsModule } from './pages/products/products.module';
import { ComponetModule } from './components/componets.modules';

const pageModules = [
  HomeModule,
  ProductsModule,
  ComponetModule
]
  
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    HttpClientModule,
    ...pageModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
