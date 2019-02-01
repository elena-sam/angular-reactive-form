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
  }
  // si validator au niveau du groupe :
  // { validator: [this.invalidName()]}
  );

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
    // avec setValue, obligation de renseigner TOUS les champs
    this.form.setValue({
      name: 'Kiti',
      lastName: 'Bad',
      age: 25
    });
  }

  // creation de notre propre validateur
  invalidName(): ValidatorFn {
    // code dispo sur Angular
    return (control: AbstractControl): ValidationErrors | null => {
          // début de la fonction
          // as string -> conversion de string, car value est de type any
      if ((control.value as string).toLowerCase() === 'max') {
      // si on fait au niveau du formGroup :
      // if ((control.get('name').value as string).toLowerCase() === 'max') {
        console.log('return invalid');
        // invalidName est ce qu'on met dans le html -> form.controls.name.errors?.invalidName
        return { 'invalidName': { message: 'C\'est raciste' }, expectedValue: 'MaxLePatron' };
      } else {
        console.log('return valid');
        return null;
      }

    };
  }
}
