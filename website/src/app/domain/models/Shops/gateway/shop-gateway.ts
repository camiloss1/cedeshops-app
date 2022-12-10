import { Observable } from "rxjs";
import { Product } from "../product";
import { Shop } from "../shop";


export abstract class ShopGateway {
    abstract getallshops(): Observable<Shop[]>;
    abstract getproductsbyshop(id:string): Observable<Product[]>;
}