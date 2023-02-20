import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormInputBase } from 'src/app/Constant/form-input-base';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss'],
})
export class FormFieldsComponent implements OnInit {
  @Input() field: FormInputBase<string | boolean>;
  @Input() userForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  get userFormControl() {
    return this.userForm as FormGroup;
  }
}
