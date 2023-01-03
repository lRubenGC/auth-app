import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    email: ['test@test.com', [ Validators.required, Validators.email ]],
    password: ['123123', [ Validators.required, Validators.minLength(6) ]]
  });

  constructor( private fb: FormBuilder ) { }

  login() {
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
  }

}
