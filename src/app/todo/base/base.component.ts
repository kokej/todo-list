import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

export abstract class BaseComponent implements OnInit {

    locked: boolean;

    todoForm = this._fb.group({
        todo: ['', Validators.required],
        description: [''],
    });

    constructor(
        protected _fb: FormBuilder
    ) { }

    unlock() {
        this.locked = false;
/*         this.todoForm.patchValue({
            todo: 'cenar',
            description: 'es tarde!!'
        });
 */    }

    lock() {
        this.locked = true;
        // TODO: Use EventEmitter with form value
        console.warn(this.todoForm.value);
    }

    ngOnInit() {
    }

}
