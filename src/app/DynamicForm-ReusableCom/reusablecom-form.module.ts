import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusablecomFormRoutingModule } from './reusablecom-form-routing.module';
import { ReusablecompFormComponent } from './reusablecomp-form/reusablecomp-form.component';
import { InputComponent } from '../Components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioComponent } from '../Components/radio/radio.component';
import { CheckboxComponent } from '../Components/checkbox/checkbox.component';
import { SelectoptionComponent } from '../Components/selectoption/selectoption.component';
import { TextareaComponent } from '../Components/textarea/textarea.component';

@NgModule({
  declarations: [
    ReusablecompFormComponent,
    InputComponent,
    RadioComponent,
    CheckboxComponent,
    SelectoptionComponent,
    TextareaComponent,
  ],
  imports: [CommonModule, ReusablecomFormRoutingModule, ReactiveFormsModule],
})
export class ReusablecomFormModule {}
