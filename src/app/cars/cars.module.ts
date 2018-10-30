import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarsComponent],
  exports: [CarsComponent]
})
export class CarsModule { }
