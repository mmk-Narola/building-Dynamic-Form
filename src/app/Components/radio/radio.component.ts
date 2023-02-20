import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface Option {
  key: string;
  value: string;
}

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements OnInit {
  @Input() control?: string;
  @Input() formGroup?: FormGroup;
  @Input() type?: string;
  @Input() option?: Option[];
  @Input() label?: string;
  @Input() required?: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
