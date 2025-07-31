import { ColorChangeDirective } from './directives/color-change.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ColorChangeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColorChangeDirective
  ]
})
export class SharedModule { }
