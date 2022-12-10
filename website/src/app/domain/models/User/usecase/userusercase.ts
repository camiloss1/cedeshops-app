import { Injectable } from "@angular/core";
import { UserGateway } from "../gateway/user-gateway";
import { Token } from "../token";
import { User } from "../user";

@Injectable({
    providedIn: 'root'
})

export class UserUseCase {
    constructor(private _userGateway: UserGateway){}
    login(email:string,password:string){
        //TODO implementacion de la logica de negocio
        return this._userGateway.login(email,password);
    }
    register(user:User) {
        return this._userGateway.register(user);
    }
    getinfouser(token:Token) {
        return this._userGateway.getinfouser(token);
    }
}