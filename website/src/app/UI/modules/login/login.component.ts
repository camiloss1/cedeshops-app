import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { UserUseCase } from 'src/app/domain/models/User/usecase/userusercase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  faSquare = faSquare;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _userUseCase: UserUseCase
  ) { }

  loginForm!: FormGroup;
  public validationMessages = {
    email: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'email', message: 'Este campo es de tipo email' },
    ],
    password: [
      { type: 'required', message: 'requerido' },
      { type: 'minlength', message: 'minimo 6 caracteres' }
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

  public get f() {
    return this.loginForm.controls;
  }

  login() {
    if (this.loginForm.valid) {
      var email: string = this.loginForm.controls['email'].value;
      var password: string = this.loginForm.controls['password'].value;
      this._userUseCase.login(email,password).subscribe((data: any) => {
        if (data) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('username', email);
          this.router.navigate(['/']);
        }
      },
      (error) => {
        switch (error.status) {
          case 401:
            Swal.fire({
              title: 'Error!',
              text: 'Usuario o contraseña incorrecta',
              icon: 'error',
              confirmButtonText: 'Intenta de nuevo'
            })
            break;
        case 500 :
          Swal.fire({
            title: 'Error!',
            text: error.message,
            icon: 'error',
            confirmButtonText: 'Intenta de nuevo'
          })
          break;
          default:
            break;
        }
      }
      )

    }

  }

}
