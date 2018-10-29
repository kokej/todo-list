import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

export abstract class BaseComponent implements OnInit {

    @Output() lockEvent: EventEmitter<any> = new EventEmitter();
    @Input() id;
    locked: boolean;

    todoForm = this._fb.group({
        id: [this.id],
        todo: ['', Validators.required],
        description: [''],
    });

    constructor(
        protected _fb: FormBuilder
    ) { }

    unlock() {
        this.locked = false;
        this.lockEvent.emit({locked: this.locked, todo: this.todoForm});
    }

    lock() {
        this.locked = true;
        this.lockEvent.emit({locked: this.locked, todo: this.todoForm});
    }

    ngOnInit() {
    }

}
