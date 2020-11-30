import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-add-product',
  templateUrl: './schedule-add-product.component.html',
  styleUrls: ['./schedule-add-product.component.scss']
})
export class ScheduleAddProductComponent implements OnInit {
  @Input() freigthId: number;
  removable = true;
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog',
    'thing',
    'thing1'
  ];
  done = [];

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    if (!this.done.some(element => element === event.previousContainer.data[event.previousIndex])) {
      this.done.push(event.container.data[event.currentIndex]);
    }
  }

  remove(item: string): void {
    const index = this.done.indexOf(item);

    if (index >= 0) {
      this.done.splice(index, 1);
    }
  }
}
