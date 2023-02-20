import { FormInputBase } from 'src/app/Constant/form-input-base';

export class checkBox extends FormInputBase<string> {
  override controlType = 'checkbox';
}
