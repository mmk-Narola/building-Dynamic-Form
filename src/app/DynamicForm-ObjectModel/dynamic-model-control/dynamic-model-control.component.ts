import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormInputBase } from 'src/app/Constant/form-input-base';

@Component({
  selector: 'app-dynamic-model-control',
  templateUrl: './dynamic-model-control.component.html',
  styleUrls: ['./dynamic-model-control.component.scss'],
})
export class DynamicModelControlComponent implements OnInit {
  @Input() formFields: FormInputBase<string | boolean>[] | null = [];
  userForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.FormGroup();
  }

  private FormGroup() {
    const group = {};
    this.formFields.forEach((field) => {
      group[field.key] = field.required
        ? new FormControl('', [...field.validators, Validators.required])
        : new FormControl('', field.validators);
    });
    this.userForm = new FormGroup(group);
  }

  onSubmit(): void {
    this.userForm.markAllAsTouched();
    if (this.userForm.invalid) {
      return;
    }
    console.log(this.userForm.value);
    this.userForm.reset();
  }
}
