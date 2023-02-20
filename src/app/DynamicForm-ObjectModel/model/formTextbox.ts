import { FormInputBase } from 'src/app/Constant/form-input-base';

export class textBox extends FormInputBase<string> {
  override controlType = 'textbox';
}
