import { Validators } from '@angular/forms';
import { FieldConfig } from '../Constant/field.interface';

export const formFieldData: FieldConfig[] = [
  {
    name: 'fname',
    label: 'First Name',
    type: 'input',
    fieldType: 'text',
    required: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'First Name Required',
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
    required: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Last Name Required',
      },
      {
        name: 'pattern',
        validator: Validators.pattern('^[a-zA-Z]+$'),
        message: 'Accept only Text',
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
        validator: Validators.minLength(5),
        message: 'mininum length of password is 3',
      },
    ],
  },
  // {
  //   name: 'phone',
  //   label: 'Phone',
  //   type: 'input',
  //   fieldType: 'number',
  //   required: true,
  //   // validations: [
  //   //   {
  //   //     name: 'required',
  //   //     validator: Validators.required,
  //   //     message: 'Phone Number Required',
  //   //   },
  //   // ],
  // },
  // {
  //   name: 'designation',
  //   label: 'Designation',
  //   type: 'select',
  //   option: [
  //     { key: 'pm', value: 'Project Manager' },
  //     { key: 'tl', value: 'Team Leader' },
  //     { key: 'sse', value: 'Senior Softwate Engineer' },
  //     { key: 'sf', value: ' Softwate Engineer' },
  //     { key: 'te', value: ' Trainee Engineer' },
  //     { key: 'wd', value: ' Web Devloper' },
  //   ],
  //   required: true,
  //   // validations: [
  //   //   {
  //   //     name: 'required',
  //   //     validator: Validators.required,
  //   //     message: 'Please select Designation',
  //   //   },
  //   // ],
  // },
];
