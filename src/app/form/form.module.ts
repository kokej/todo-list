import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraggableModule } from './../directives/draggable/draggable.module';
import { TodoModule } from '../todo/todo.module';
import { FormComponent } from './form.component';

@NgModule({
    imports: [
        CommonModule,
        TodoModule,
        DraggableModule
    ],
    declarations: [
        FormComponent,
    ],
    exports: [
        FormComponent
    ]
})
export class FormModule { }
