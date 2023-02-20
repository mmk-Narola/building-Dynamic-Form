import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicformJsonRoutingModule } from './dynamicform-json-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormJsonComponent } from './dynamic-form-json/dynamic-form-json.component';

@NgModule({
  declarations: [DynamicFormJsonComponent],
  imports: [
    CommonModule,
    DynamicformJsonRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class DynamicformJsonModule {}
