import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent implements OnInit {

  formGroup: FormGroup

  constructor(private formBuilder:FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: [''],
      dueDate:[null],
      dueTime: [null]
    });
  }

  ngOnInit(): void {}

}
