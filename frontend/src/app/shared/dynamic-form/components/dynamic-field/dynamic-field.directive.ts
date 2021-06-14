import {
  ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type,
  ViewContainerRef
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import {FormInputComponent} from "../form-input/form-input.component";
import {FormButtonComponent} from "../form-button/form-button.component";
import {FormSelectComponent} from "../form-select/form-select.component";

import {FormTextComponent} from "../form-text/form-text.component";
import {FormPasswordComponent} from "../form-password/form-password.component";
import {FormHiddenComponent} from "../form-hidden/form-hidden.component";
import {FormMultiSelectComponent} from "../form-multi-select/form-multi-select.component";
import {FormUploadComponent} from "../form-upload/form-upload.component";
import {FormEditorComponent} from "../form-editor/form-editor.component";
import {FormDateComponent} from "../form-date/form-date.component";
import {FormEmailComponent} from "../form-email/form-email.component";
import {FormNumberComponent} from "../form-number/form-number.component";
import {Field} from "../../containers/models/field.interface";
import {FieldConfig} from "../../containers/models/field-config.interface";

const components: {[type: string]: Type<Field>} = {
  button: FormButtonComponent,
  input: FormInputComponent,
  text: FormTextComponent,
  editor: FormEditorComponent,
  select: FormSelectComponent,
  password: FormPasswordComponent,
  hidden: FormHiddenComponent,
  multiSelect: FormMultiSelectComponent,
  date: FormDateComponent,
  upload: FormUploadComponent,
  email:FormEmailComponent,
  number:FormNumberComponent


};

@Directive({
  selector: '[dynamicField]'
})
  export class DynamicFieldDirective implements Field, OnChanges, OnInit {
  @Input()
  config: FieldConfig;

  @Input()
  group: FormGroup;

  component: ComponentRef<Field>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`
      );
    }
    const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }

}
