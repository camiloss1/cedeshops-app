import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  signupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,) { }

  public validationMessages = {
    name: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    document: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    phone: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'pattern', message: 'Este campo es de tipo teléfono' },
    ],
    email: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'email', message: 'Solo se permiten emails' }
    ],
    password: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'minlength', message: 'Este campo debe tener minimo 8 caracteres' }
    ]
  };
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['',
        [
          Validators.required,
        ]
      ],
      document: ['',
        [
          Validators.required,
        ]
      ],
      phone: ['',
        [
          Validators.required,
          Validators.pattern(/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/)
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.email,
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]
    })
  }
  public get f() {
    return this.signupForm.controls
  }
}
