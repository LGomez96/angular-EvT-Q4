import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() placeHolder: string = '';
  @Input() label: string = '';
  @Input() form: FormGroup = new FormGroup({});
  @Input() control: string = 'control'

  constructor() { }

  ngOnInit(): void {
    if (!this.form.contains(this.control)) {
      this.form.addControl(this.control, new FormControl(null, [Validators.required]));
    }
  }

}
