import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toast, ToastType } from 'src/app/models/toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts: Toast[];
  public toastsSubject: BehaviorSubject<Toast[]> = new BehaviorSubject([]);

  constructor() {
    this.toasts = [];
    this.toastsSubject.next(this.toasts);
  }

  addToast = (type: ToastType, text: string, timeout?: number) => {
    const toast: Toast = new Toast(type, text);
    this.toasts.push(toast);
    this.toastsSubject.next(this.toasts);
    if (timeout) {
      setTimeout(() => {
        this.removeToast(toast);
      }, timeout * 1000);
    }
  }

  removeToast = (toast: Toast) => {
    const index = this.toasts.findIndex(t => t.uuid === toast.uuid);
    this.toasts.splice(index, 1);
    this.toastsSubject.next(this.toasts);
  }
}
