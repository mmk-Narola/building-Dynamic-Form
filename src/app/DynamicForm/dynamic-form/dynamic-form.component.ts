import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formFieldData } from '../formField';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  dynamicForm: FormGroup;
  buildingForm = formFieldData;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.dynamicForm = this.formControl();
    console.log('Dynamic Form Field', this.dynamicForm);
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
