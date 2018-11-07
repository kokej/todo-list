import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [
    DragDropModule,
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class CustomMatModule { }
