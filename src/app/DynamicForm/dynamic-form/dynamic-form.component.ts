import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formFieldData } from '../formField';
import { FormField } from 'src/app/Constant/form-fields';
import { HttpClient } from '@angular/common/http';
import { FieldConfig, FormField1 } from 'src/app/Constant/field.interface';
import { group } from '@angular/animations';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  dynamicForm: FormGroup;
  buildingForm = formFieldData;

  constructor(private fb: FormBuilder, private httpService: HttpClient) {}

  ngOnInit(): void {
    this.dynamicForm = this.formControl();
  }

  formControl() {
    const group = this.fb.group({});
    this.buildingForm.forEach((field) => {
      const control = this.fb.control(
        '',
        this.validators(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  validators(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach((valid) => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  Submit() {
    if (this.dynamicForm.invalid) {
      return;
    }
    console.log(this.dynamicForm.value);
  }
}
