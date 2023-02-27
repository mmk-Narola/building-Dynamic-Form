import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicformJsonRoutingModule } from './dynamicform-json-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormJsonComponent } from './dynamic-form-json/dynamic-form-json.component';
import { ReusablecomFormModule } from '../DynamicForm-ReusableCom/reusablecom-form.module';
import { InputComponent } from '../Components/input/input.component';
import { CheckboxComponent } from '../Components/checkbox/checkbox.component';
import { RadioComponent } from '../Components/radio/radio.component';
import { SelectoptionComponent } from '../Components/selectoption/selectoption.component';
import { TextareaComponent } from '../Components/textarea/textarea.component';
import { TableComponent } from '../Components/table/table.component';

@NgModule({
  declarations: [DynamicFormJsonComponent, TableComponent],
  imports: [
    CommonModule,
    DynamicformJsonRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class DynamicformJsonModule {}
