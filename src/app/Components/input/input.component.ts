import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() control?: string;
  @Input() formGroup?: FormGroup;
  @Input() type?: string;
  @Input() placeholder?: string;
  @Input() label?: string;
  @Input() required?: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
