import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() closeClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}

  close = (event) => {
    event.stopPropagation();
    this.closeClick.emit();
  }

}
