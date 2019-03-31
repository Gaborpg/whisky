import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WhiskyComponent} from './whisky.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [WhiskyComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class WhiskyModule {
}
