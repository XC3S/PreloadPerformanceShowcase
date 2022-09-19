import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { LinkComponent } from './link/link.component';

const impex = [
    LinkComponent
];

@NgModule({
  declarations: [
    ...impex,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [
    ...impex
  ]
})
export class ComponetModule { }
