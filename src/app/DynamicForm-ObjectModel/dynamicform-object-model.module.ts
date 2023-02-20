import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicformObjectModelRoutingModule } from './dynamicform-object-model-routing.module';
import { DynamicFormObjectModelComponent } from './dynamic-form-object-model/dynamic-form-object-model.component';
import { DynamicModelControlComponent } from './dynamic-model-control/dynamic-model-control.component';
import { FormFieldsComponent } from './form-fields/form-fields.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DynamicFormObjectModelComponent,
    DynamicModelControlComponent,
    FormFieldsComponent,
  ],
  imports: [
    CommonModule,
    DynamicformObjectModelRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class DynamicformObjectModelModule {}
