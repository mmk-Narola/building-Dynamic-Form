import { Component, OnInit } from '@angular/core';
import { DynamicformJsonService } from '../dynamicform-json.service';
import { FormField, FormFieldJSON } from 'src/app/Constant/form-fields';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dynamic-form-json',
  templateUrl: './dynamic-form-json.component.html',
  styleUrls: ['./dynamic-form-json.component.scss'],
})
export class DynamicFormJsonComponent implements OnInit {
  formFields: FormFieldJSON[] = [];
  dynamicForm = this.fb.group({});
  country: any;

  constructor(
    private formService: DynamicformJsonService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getDynamicFormField();
  }

  getDynamicFormField() {
    this.formService.getFormFields().subscribe((response: FormField) => {
      this.formFields = response.data;

      this.setDynamicFormControl(response.data);
      this.formService.getCoutntry().subscribe((res: any) => {
        this.country = res.country;
        this.formFields.forEach((ele) => {
          if (ele.name === 'country') {
            ele.options = this.country;
          }
        });
        console.log(this.formFields);
      });
    });
  }

  getData(name: string, event: any) {
    const Code = event.target.value;

    if (name === 'country' && Code) {
      this.http
        .get(`http://192.168.100.89:4002/api/states/${Code}`)
        .subscribe((res: any) => {
          console.log(res);
          this.formFields.forEach((ele) => {
            if (ele.name === 'state') {
              ele.options = res.states;
            }
          });
          console.log(this.formFields);
        });
    } else if (name === 'state' && Code) {
      this.http
        .get(`http://192.168.100.89:4002/api/city/${Code}`)
        .subscribe((res: any) => {
          console.log(res);
          this.formFields.forEach((ele) => {
            if (ele.name === 'city') {
              ele.options = res.city;
            }
          });
          console.log(this.formFields);
        });
    } else {
      console.log('Error');
    }
  }

  setDynamicFormControl(controls: FormFieldJSON[]) {
    for (const control of controls) {
      const validators = [];

      for (const [key, value] of Object.entries(control.validators)) {
        switch (key) {
          case 'min':
            validators.push(Validators.min(value));
            break;

          case 'max':
            validators.push(Validators.max(value));
            break;

          case 'required':
            if (value) {
              validators.push(Validators.required);
            }
            break;

          case 'requiredTrue':
            if (value) {
              validators.push(Validators.requiredTrue);
            }
            break;

          case 'email':
            if (value) {
              validators.push(Validators.email);
            }
            break;

          case 'minLength':
            validators.push(Validators.minLength(value));
            break;

          case 'maxLength':
            validators.push(Validators.maxLength(value));
            break;

          case 'pattern':
            validators.push(Validators.pattern(value));
            break;

          case 'nullValidator':
            if (value) {
              validators.push(Validators.nullValidator);
            }
            break;

          default:
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
    if (this.dynamicForm.invalid) {
      return;
    }
    console.log(this.dynamicForm.value);
  }
}
