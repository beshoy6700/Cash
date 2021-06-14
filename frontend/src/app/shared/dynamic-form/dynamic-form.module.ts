import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormInputComponent} from './components/form-input/form-input.component';
import {FormButtonComponent} from './components/form-button/form-button.component';
import {FormDateComponent} from './components/form-date/form-date.component';
import {FormEditorComponent} from './components/form-editor/form-editor.component';
import {FormEmailComponent} from './components/form-email/form-email.component';
import {FormHiddenComponent} from './components/form-hidden/form-hidden.component';
import {FormMultiSelectComponent} from './components/form-multi-select/form-multi-select.component';
import {FormSelectComponent} from './components/form-select/form-select.component';
import {FormNumberComponent} from './components/form-number/form-number.component';
import {FormPasswordComponent} from './components/form-password/form-password.component';
import {FormTextComponent} from './components/form-text/form-text.component';
import {FormUploadComponent} from './components/form-upload/form-upload.component';
import {DynamicFormComponent} from './containers/dynamic-form/dynamic-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgSelectModule} from "@ng-select/ng-select";
import {AngularEditorModule} from "@kolkov/angular-editor";
import {AngularFileUploaderModule} from "angular-file-uploader";
import {DynamicFieldDirective} from "./components/dynamic-field/dynamic-field.directive";


@NgModule({
  declarations: [
    DynamicFieldDirective,
    FormInputComponent,
    FormButtonComponent,
    FormDateComponent,
    FormEditorComponent,
    FormEmailComponent,
    FormHiddenComponent,
    FormMultiSelectComponent,
    FormSelectComponent,
    FormNumberComponent,
    FormPasswordComponent,
    FormTextComponent,
    FormUploadComponent,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    AngularEditorModule,
    AngularFileUploaderModule
  ],
})
export class DynamicFormModule {
}
