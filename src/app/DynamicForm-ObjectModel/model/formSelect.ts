import { FormInputBase } from 'src/app/Constant/form-input-base';

export class selectOption extends FormInputBase<string> {
  override controlType = 'select';
}
