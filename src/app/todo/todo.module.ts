import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        TodoComponent
    ],
    exports: [
        TodoComponent
    ]
})
export class TodoModule { }
