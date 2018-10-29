import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseComponent } from './../base/base.component';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html'
})
export class TodoComponent extends BaseComponent implements OnInit {

    constructor(
        protected _fb: FormBuilder
    ) {
        super(_fb);
    }

    ngOnInit() {
    }

}
