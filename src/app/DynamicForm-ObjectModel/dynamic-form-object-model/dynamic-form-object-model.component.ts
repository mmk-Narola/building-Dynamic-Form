import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormInputBase } from 'src/app/Constant/form-input-base';
import { checkBox } from '../model/formCheckbox';
import { radiBtn } from '../model/formRadio';
import { selectOption } from '../model/formSelect';
import { textArea } from '../model/formTeaxArea';
import { textBox } from '../model/formTextbox';
import { country } from 'src/app/Constant/country';
import { state } from 'src/app/Constant/state';

@Component({
  selector: 'app-dynamic-form-object-model',
  templateUrl: './dynamic-form-object-model.component.html',
  styleUrls: ['./dynamic-form-object-model.component.scss'],
})
export class DynamicFormObjectModelComponent implements OnInit {
  myForm: FormInputBase<string | boolean>[] = [
    new textBox({
      key: 'fname',
      label: 'First Name',
      type: 'text',
      required: true,
    }),
    new textBox({
      key: 'lname',
      label: 'Last Name',
      type: 'text',
      required: false,
    }),

    new textBox({
      key: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      validators: [Validators.email],
    }),

    new textBox({
      key: 'password',
      label: 'Password',
      type: 'password',
      required: true,
      validators: [Validators.minLength(6)],
    }),

    new textBox({
      key: 'dob',
      label: 'DOB',
      type: 'date',
      required: true,
    }),

    new textBox({
      key: 'file',
      label: 'Image Upload',
      type: 'file',
      required: true,
      fileType: 'multiple',
    }),

    new radiBtn({
      key: 'gender',
      label: 'Gender',
      type: 'radio',
      required: true,
      options: [
        { key: 'male', value: 'Male' },
        { key: 'female', value: 'Female' },
        { key: 'other', value: 'Other' },
      ],
    }),

    new textArea({
      key: 'address',
      label: 'Address',
      required: true,
    }),

    new textBox({
      type: 'number',
      key: 'zipCode',
      label: 'ZipCode',
      required: true,
      validators: [Validators.maxLength(3)],
    }),

    new selectOption({
      key: 'states',
      label: 'State',
      options: state,
      required: true,
    }),

    new selectOption({
      key: 'country',
      label: 'Country',
      options: country,
      required: true,
    }),

    new checkBox({
      key: 'terms',
      value: 'Agree to terms',
    }),
  ];

  constructor() {}

  ngOnInit(): void {}
}
