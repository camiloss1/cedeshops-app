import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { User } from 'src/app/domain/models/User/user';
import { UserRegistered } from 'src/app/domain/models/User/userregistered';
import { GenericService } from '../helpers/generic.service';

@Injectable({
  providedIn: 'root'
})
export class CedeshopsUserService {

  private _url = 'http://localhost:3001'
  constructor(private genericService: GenericService) { }
  login(email: string, password: string) {
    return this.genericService.post<Token>(this._url, 'users/login', { email, password })
  }
  register(user: User) {
    return this.genericService.post<UserRegistered>(this._url, 'users/signup', user);
  }
}
