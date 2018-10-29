import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TodoComponent } from '../todo/todo/todo.component';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    constructor(private _fb: FormBuilder) { }

    todos: TodoComponent[] = [];

    add(): void {
        this.todos.push(new TodoComponent(this._fb));
    }

    onLock($event) {
        console.log($event);
    }

    ngOnInit() {
        this.add();
    }

}
