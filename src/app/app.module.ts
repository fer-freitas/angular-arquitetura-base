import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { AuthenticationModule } from "./modules/authentication/authentication.module";
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';

import { AuthService } from './core/services/firebase/auth.service';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { CookieService } from 'ngx-cookie-service';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ComingSoonModule } from './modules/coming-soon/coming-soon.module';
import { ConciliadorOpsModule } from './modules/conciliador-ops/conciliador-ops.module';
import { ErrorPagesModule } from './modules/error-pages/error-pages.module';
import { QuebraSigiloModule } from './modules/quebra-sigilo/quebra-sigilo.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
   return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    SharedModule,
    CoreModule,
    AuthenticationModule,
    ComingSoonModule,
    ConciliadorOpsModule,
    QuebraSigiloModule,
    ErrorPagesModule
  ],
  providers: [AuthService, AuthGuard, NoAuthGuard, CookieService],
  bootstrap: [AppComponent],
  schemas:[]
})
export class AppModule { }
