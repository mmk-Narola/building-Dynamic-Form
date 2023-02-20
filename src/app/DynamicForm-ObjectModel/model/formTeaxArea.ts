import { FormInputBase } from 'src/app/Constant/form-input-base';

export class textArea extends FormInputBase<string> {
  override controlType = 'textarea';
}
