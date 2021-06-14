import {ValidatorFn} from "@angular/forms";

export interface FieldConfig {
  disabled?: boolean,
  label?: string,
  name: string,
  options?: any,
  placeholder?: string,
  type: string,
  validation?: ValidatorFn[],
  value?: any,
  selected?: any,
  items?: {
    id: string | number,
    name: number | string,
    disabled?: boolean,
    checked?: boolean
  }[],
  uploadKeyPath?: string
}
