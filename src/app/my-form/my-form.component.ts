import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  form = this.fb.group({
    name: ['', Validators.required],
    lastName: [''],
    age: ['', Validators.min(18)]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value);
  }

  updateSomeProperties() {
    this.form.patchValue({
      name: 'Kiti'
    });
  }

  updatAllProperties() {
    this.form.setValue({
      name: 'Kiti',
      lastName: 'Bad',
      age: 25
    });
  }
}
