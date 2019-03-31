import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WhiskyComponent} from './whisky/whisky.component';

const routes: Routes = [
  {path: '', component: WhiskyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
