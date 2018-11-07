import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMatModule } from './../custom-mat/custom-mat.module';

import { TodoModule } from '../todo/todo.module';
import { FormComponent } from './form.component';

@NgModule({
    imports: [
        CommonModule,
        CustomMatModule,
        TodoModule,
    ],
    declarations: [
        FormComponent,
    ],
    exports: [
        FormComponent
    ]
})
export class FormModule { }
