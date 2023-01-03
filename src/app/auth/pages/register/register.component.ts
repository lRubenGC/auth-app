import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    name: ['Ruben', [ Validators.required, Validators.minLength(2) ]],
    email: ['test@test.com', [ Validators.required, Validators.email ]],
    password: ['123123', [ Validators.required, Validators.minLength(6) ]]
  })

  constructor( private fb: FormBuilder ) { }

  register() {
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
  }

}
