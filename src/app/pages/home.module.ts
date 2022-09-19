import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
const impex = [
    HomeComponent
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
export class HomeModule { }
