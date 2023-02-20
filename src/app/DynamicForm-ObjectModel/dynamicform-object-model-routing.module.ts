import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormObjectModelComponent } from './dynamic-form-object-model/dynamic-form-object-model.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicFormObjectModelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicformObjectModelRoutingModule {}
