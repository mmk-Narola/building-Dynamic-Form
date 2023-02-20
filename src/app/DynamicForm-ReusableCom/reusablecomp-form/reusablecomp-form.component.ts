import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formFieldData } from '../formFields';

@Component({
  selector: 'app-reusablecomp-form',
  templateUrl: './reusablecomp-form.component.html',
  styleUrls: ['./reusablecomp-form.component.scss'],
})
export class ReusablecompFormComponent implements OnInit {
  formField = formFieldData;
  reusableComDyanicform: FormGroup;
  isSubmiit = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.reusableComDyanicform = this.formControl();
  }

  formControl() {
    const group = this.fb.group({});
    this.formField.forEach((field) => {
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

  ngSubmit() {
    this.isSubmiit = true;
    if (this.reusableComDyanicform.invalid) {
      return;
    }
    console.log(this.reusableComDyanicform.value);
  }
}
