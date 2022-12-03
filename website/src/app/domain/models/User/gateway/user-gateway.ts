import { Observable } from "rxjs";
import { Token } from "../token";

export abstract class UserGateway {
    abstract login(email:string,password:string): Observable<Token>;
}