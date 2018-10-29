import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraggableDirective } from './draggable.directive';
import { MovableDirective } from './movable.directive';
import { MovableAreaDirective } from './movable-area.directive';
/* import { DraggableHelperDirective } from './draggable-helper.directive';
import { SortableDirective } from './sortable.directive';
import { SortableListDirective } from './sortable-list.directive'; */

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DraggableDirective,
    MovableDirective,
    MovableAreaDirective,
/*     DraggableHelperDirective,
    SortableDirective,
    SortableListDirective */
  ],
  exports: [
    DraggableDirective,
    MovableDirective,
    MovableAreaDirective,
/*     DraggableHelperDirective,
    SortableListDirective,
    SortableDirective */
  ]
})
export class DraggableModule { }
