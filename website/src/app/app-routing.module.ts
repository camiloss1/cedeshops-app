import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './UI/layouts/default/default.component';
import { FullwidthComponent } from './UI/layouts/fullwidth/fullwidth.component';
import { HomeComponent } from './UI/modules/home/home.component';
import { LoginComponent } from './UI/modules/login/login.component';
import { RegisterComponent } from './UI/modules/register/register.component';


const routes: Routes = [
  {
    path: '', 
    component: DefaultComponent,
    children: [{
      path: '',
      component: HomeComponent
    }]
  },
  {
    path: 'full', 
    component: FullwidthComponent,
    children: [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
