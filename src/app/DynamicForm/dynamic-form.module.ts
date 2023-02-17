import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormRoutingModule } from './dynamic-form-routing.module';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DynamicFormComponent],
  imports: [CommonModule, DynamicFormRoutingModule, ReactiveFormsModule],
})
export class DynamicFormModule {}
