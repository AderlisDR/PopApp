import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { UserRole } from '../../../enums/user-role.enum';
import { AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-schedule-add-product',
  templateUrl: './schedule-add-product.component.html',
  styleUrls: ['./schedule-add-product.component.scss']
})
export class ScheduleAddProductComponent implements OnInit {
  @Input() freigthId: number;
  removable = true;
  isAdmin = false;
  isUser = false;
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

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    this.isAdmin = currentUser.userRole === UserRole.Admin;
    this.isUser = currentUser.userRole === UserRole.User;
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

  approveFreigth() {
    Swal.fire({
      title: '¿Seguro que desea aprobar esta carga?',
      text: "Estos cambios no pueden ser reversados",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aprobar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // TO DO
      }
    });
  }
  
  async reporteFreigth() {
    /* const { value: text } = */ await Swal.fire({
      title: '¿Seguro que desea reportar esta carga?',
      text: "Estos cambios no pueden ser reversados",
      input: 'textarea',
      inputPlaceholder: 'Escriba porqué está reportando esta carga...',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Reportar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        if (true) {
          // TO DO
        } else {
          // TO DO
        }
      }
    });
  }
}
