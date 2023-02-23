export interface FormField {
  data: FormFieldJSON[];
}

export interface FormFieldJSON {
  name: string;
  label: string;
  value: string;
  type: string;
  validators: ValidatorJSON;
  options: OptionJSON[];
  nullValidator?: boolean;
}

interface ValidatorJSON {
  required?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
}

interface OptionJSON {
  name?: string;
  sortname?: string;
  _id?: string;
  label: string;
  value: string;
}
