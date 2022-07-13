import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   name: new FormControl('Mikkaiser'),
    //   email: new FormControl('mikkaser@mikkaiser.com'),
    // });

    this.form = this.formBuilder.group({
      name: ['Mikkaiser', Validators.required],
      email: ['mikkaser@mikkaiser.com', Validators.required],
      date: [null, Validators.required],
    });
  }

  fireAction() {
    const result = this.form.value;

    this.form.reset();

    console.log(result);
  }
}
