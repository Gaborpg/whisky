import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MultiSelectComponent} from './components/multi-select/multi-select.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [MultiSelectComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    MultiSelectComponent,
    ReactiveFormsModule]
})
export class SharedModule { }
