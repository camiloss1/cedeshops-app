import { Injectable } from "@angular/core";
import { UserGateway } from "../gateway/user-gateway";

@Injectable({
    providedIn: 'root'
})

export class UserUseCase {
    constructor(private _userGateway: UserGateway){}
    login(email:string,password:string){
        //TODO implementacion de la logica de negocio
        return this._userGateway.login(email,password);
    }
}