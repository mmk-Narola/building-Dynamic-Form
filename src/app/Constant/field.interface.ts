export interface Validator {
  name: string;
  validator: any;
  message: string;
}
export interface FieldConfig {
  name: string;
  label?: string;
  type: string;
  fieldType?: string;
  placeholder?: string;
  value?: any;
  option?: { key: string; value: string }[];
  optionKey?: any[];
  required?: boolean;
  validations?: Validator[];
}
