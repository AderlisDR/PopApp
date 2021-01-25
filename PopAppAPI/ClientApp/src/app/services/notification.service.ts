import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  showWarningMessage(message: string) {
    Swal.fire({
      icon: 'warning',
      text: message
    });
  }

  showErrorMessage(message: string) {
    Swal.fire({
      icon: 'error',
      text: message
    });
  }

  showSuccessMessage(message: string) {
    Swal.fire({
      icon: 'success',
      text: message
    });
  }

  showInfoMessage(message: string) {
    Swal.fire({
      icon: 'info',
      text: message
    });
  }

  showLoading() {
    Swal.fire({
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });
  }
}
