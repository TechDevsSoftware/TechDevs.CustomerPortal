import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("562400802513-l81m74td45m43m3r8mj9qq3ipdg9o071.apps.googleusercontent.com")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PolicyModule,
    RouterModule.forRoot([]),
    CoreModule,
    SocialLoginModule,
    FormsModule,
    AccountModule,
    NgHttpLoaderModule
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
