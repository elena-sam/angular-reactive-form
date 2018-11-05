import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  form = this.fb.group({
    name: ['', [Validators.required, this.invalidName()]],
    lastName: [''],
    age: ['', Validators.min(18)]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  /**
   * Envoie du formulaire
   */
  onSubmit() {
    console.log(this.form.value);
  }

  /**
   * Mise à jour d'une propriété
   */
  updateSomeProperties() {
    this.form.patchValue({
      name: 'Kiti'
    });
  }

  /**
   * Mise à jour de toutes les propriétés
   */
  updatAllProperties() {
    this.form.setValue({
      name: 'Kiti',
      lastName: 'Bad',
      age: 25
    });
  }

  invalidName(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      if ((control.value as string).toLowerCase() === 'max') {
        console.log('return invalid');
        return { 'invalidName': { message: 'C\'est raciste' } };
      } else {
        console.log('return valid');
        return null;
      }

    };
  }
}
