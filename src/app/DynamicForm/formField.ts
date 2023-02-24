import { Validators } from '@angular/forms';
import { FieldConfig } from '../Constant/field.interface';
import { state } from '../Constant/state';
import { country } from '../Constant/country';

export const formFieldData: FieldConfig[] = [
  {
    name: 'name',
    label: 'Name',
    type: 'input',
    fieldType: 'text',
    required: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Name Required',
      },
      {
        name: 'pattern',
        validator: Validators.pattern('^[a-zA-Z]+$'),
        message: 'Accept only Text',
      },
    ],
  },
  {
    name: 'lname',
    label: 'Last Name',
    type: 'input',
    fieldType: 'text',
    required: false,
  },
  {
    name: 'email',
    label: 'Email',
    type: 'input',
    fieldType: 'email',
    required: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Email Required',
      },
      {
        name: 'pattern',
        validator: Validators.pattern(
          '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
        ),
        message: 'Email abc@gmail.com',
      },
    ],
  },
  {
    type: 'input',
    label: 'Password',
    fieldType: 'password',
    name: 'password',
    required: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Password Required',
      },
      {
        name: 'minlength',
        validator: Validators.minLength(3),
        message: 'mininum length of password is 3',
      },
    ],
  },
  {
    name: 'dob',
    label: 'DOB',
    type: 'input',
    fieldType: 'date',
    required: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Date Required',
      },
    ],
  },
  {
    name: 'fiel',
    label: 'Upload',
    type: 'input',
    fieldType: 'file',
    required: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'File Required',
      },
    ],
  },

  {
    name: 'gender',
    label: 'Gender',
    type: 'radio',
    option: [
      { key: 'male', value: 'Male' },
      { key: 'female', value: 'Female' },
      { key: 'other', value: 'Other' },
    ],
    required: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Gender Required',
      },
    ],
  },
  {
    name: 'address',
    label: 'Address',
    type: 'textarea',
    required: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Address Required',
      },
    ],
  },
  {
    name: 'zipcode',
    label: 'ZipCode',
    type: 'input',
    fieldType: 'number',
    required: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Zip Required',
      },
      {
        name: 'minlength',
        validator: Validators.minLength(4),
        message: 'Min length of zip is 4',
      },
    ],
  },
  {
    name: 'state',
    label: 'State',
    type: 'select',
    option: state,
    required: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'State Required',
      },
    ],
  },
  {
    name: 'country',
    label: 'Country',
    type: 'select',
    option: country,
    required: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'State Required',
      },
    ],
  },
  {
    name: 'terms',
    type: 'checkbox',
    value: 'Accept Term and Conditon',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Accept Terms',
      },
    ],
  },
];
