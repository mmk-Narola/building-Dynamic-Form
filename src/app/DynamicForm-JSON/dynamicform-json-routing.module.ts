import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormJsonComponent } from './dynamic-form-json/dynamic-form-json.component';

const routes: Routes = [{ path: '', component: DynamicFormJsonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicformJsonRoutingModule {}
