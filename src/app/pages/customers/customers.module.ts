import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { Routes, RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';

const ROUTES: Routes = [
  { path: '', component: CustomersComponent },
];

@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatSliderModule
  ]
})
export class CustomersModule { }
