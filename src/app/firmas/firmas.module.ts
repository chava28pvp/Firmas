import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirmasComponent } from './firmas.component';
@NgModule({
  declarations: [FirmasComponent],
  imports: [
    CommonModule
  ],

  exports: [FirmasComponent]
})
export class FirmasModule { }
