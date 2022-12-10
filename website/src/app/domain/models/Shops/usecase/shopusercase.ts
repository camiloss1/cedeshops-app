import { Injectable } from "@angular/core";
import { ShopGateway } from "../gateway/shop-gateway";

@Injectable({
    providedIn: 'root'
})

export class ShopUseCase {
    constructor(private _shopGateway: ShopGateway){}
    getallshops(){
        //TODO implementacion de la logica de negocio
        return this._shopGateway.getallshops();
    }

    getproductsbyshop(id:string){
        //TODO implementacion de la logica de negocio
        return this._shopGateway.getproductsbyshop(id);
    }
}