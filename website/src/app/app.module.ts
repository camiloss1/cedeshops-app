import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DefaultModule } from './UI/layouts/default/default.module';
import { FullwidthModule } from './UI/layouts/fullwidth/fullwidth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserGateway } from './domain/models/User/gateway/user-gateway';
import { CedeshopsUserService } from './infraestructure/driven-adapter/services/cedeshops-user/cedeshops-user.service';
import { AuthInterceptor } from './infraestructure/driven-adapter/services/helpers/authinterceptor';
import { ShopGateway } from './domain/models/Shops/gateway/shop-gateway';
import { CedeshopsShopsService } from './infraestructure/driven-adapter/services/cedeshops-shops/cedeshops-shops.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullwidthModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: UserGateway, useClass: CedeshopsUserService },
    { provide: ShopGateway, useClass: CedeshopsShopsService }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

}
