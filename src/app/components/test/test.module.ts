import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
const impex = [
    TestComponent
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
export class TestModule { }
