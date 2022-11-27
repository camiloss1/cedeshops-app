import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  faSquare = faSquare;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  loginForm!: FormGroup;
public validationMessages = {
  email: [
    {type: 'required', message: 'Este campo es requerido'},
    {type: 'email', message: 'Este campo es de tipo email'},
  ],
  password: [
    {type:'required', message:'requerido'},
    {type:'minlength', message:'minimo 6 caracteres'}
  ]
}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [
          Validators.required,
          Validators.email
        ]
        ],
        password: ['', [
          Validators.required,
          Validators.minLength(6)
        ]]
      }
    )
  }

  public get f(){
    return this.loginForm.controls;
  }

login(){
  let username = 'juan@sbl.dev';
  let password = '123456';
  if(this.loginForm.valid)
  {
    if(this.loginForm.controls['email'].value == username && this.loginForm.controls['password'].value == password)
    {
      Swal.fire({
        title: 'Correcto!',
        text: 'Te has logueado',
        icon: 'success',
        confirmButtonText: 'Genial'
      })
    }
    else {
      Swal.fire({
        title: 'Error!',
        text: 'Usuario o contraseña incorrecta',
        icon: 'error',
        confirmButtonText: 'Intenta de nuevo'
      })
    }
  }
  
}

}
