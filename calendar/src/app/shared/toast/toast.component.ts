import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { Toast, ToastType } from 'src/app/models/toast';


@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  constructor(private toastService: ToastService) { }

  toasts: Toast[];
  ToastType = ToastType;

  ngOnInit(): void {
    this.toastService.toastsSubject.subscribe(toasts => {
      this.toasts = toasts;
    });
  }

  close = (toast) => {
    this.toastService.removeToast(toast);
  }

}
