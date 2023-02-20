import { Component, OnInit } from '@angular/core';
import { DynamicformJsonService } from '../dynamicform-json.service';
import { FormField, FormFieldJSON } from 'src/app/Constant/form-fields';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-json',
  templateUrl: './dynamic-form-json.component.html',
  styleUrls: ['./dynamic-form-json.component.scss'],
})
export class DynamicFormJsonComponent implements OnInit {
  formFields: FormFieldJSON[] = [];
  dynamicForm = this.fb.group({});

  constructor(
    private formService: DynamicformJsonService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getDynamicFormField();
  }

  getDynamicFormField() {
    this.formService.getFormFields().subscribe((response: FormField) => {
      this.formFields = response.data;
      this.setDynamicFormControl(response.data);
    });
  }

  setDynamicFormControl(controls: FormFieldJSON[]) {
    for (const control of controls) {
      const validators = [];

      for (const [key, value] of Object.entries(control.validators)) {
        switch (key) {
          case 'required':
            if (value) {
              validators.push(Validators.required);
            }
            break;

          case 'minLength':
            validators.push(Validators.minLength(value));
            break;

          case 'pattern':
            validators.push(Validators.pattern(value));
            break;
        }
      }
      // if (control.validators?.required) {
      //   validators.push(Validators.required);
      // }
      this.dynamicForm.addControl(
        control.name,
        this.fb.control(control.value, validators)
      );
    }
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
  }
}
