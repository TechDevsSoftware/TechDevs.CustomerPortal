import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { PolicyModule } from './policy/policy.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';

import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { NgHttpLoaderModule } from "ng-http-loader";
import { AccountModule } from './account/account.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClientKeyInterceptor } from './core/interceptors/clientkey.interceptor';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { MyVehiclesModule } from './my-vehicles/my-vehicles.module';
import { SigninComponent } from './app/components/signin/signin.component';
import { RegisterComponent } from './app/components/register/register.component';
import { InvalidClientComponent } from './app/components/invalid-client/invalid-client.component';
import { MyProfileModule } from './my-profile/my-profile.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCheckboxModule } from '@angular/material';
import { OffersModule } from './offers/offers.module';
import { ApiConfiguration } from './api/api-configuration';
import { environment } from '../environments/environment';
import { ApiModule } from "./api/api.module";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("562400802513-l81m74td45m43m3r8mj9qq3ipdg9o071.apps.googleusercontent.com")
  }
]);

export function provideConfig() {
  return config;
}

export function initApiConfiguration(config: ApiConfiguration): Function {
  return () => {
    config.rootUrl = environment.accountServer;
  };
}
export const INIT_API_CONFIGURATION: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initApiConfiguration,
  deps: [ApiConfiguration],
  multi: true
};

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    InvalidClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PolicyModule,
    MyVehiclesModule,
    RouterModule.forRoot([]),
    ApiModule,
    CoreModule,
    SocialLoginModule,
    FormsModule,
    AccountModule,
    NgHttpLoaderModule,
    MyProfileModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    OffersModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ClientKeyInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    INIT_API_CONFIGURATION
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
