import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-selectoption',
  templateUrl: './selectoption.component.html',
  styleUrls: ['./selectoption.component.scss'],
})
export class SelectoptionComponent implements OnInit {
  @Input() control?: string;
  @Input() formGroup?: FormGroup;
  @Input() options?: any;
  @Input() label?: string;
  @Input() required?: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
