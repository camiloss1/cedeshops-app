import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder
  ) { }

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email:['',[

        ]
      ],
      password:['',[
        
      ]]
      }
    )
  }

}
