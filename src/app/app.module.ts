import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeBodyComponent } from './home/home-body/home-body.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ContactBodyComponent } from './contact/contact-body/contact-body.component';
import { ZelfDoenComponent } from './zelf-doen/zelf-doen.component';
import { ZelfDoenBodyComponent } from './zelf-doen/zelf-doen-body/zelf-doen-body.component';
import { StellingenComponent } from './stellingen/stellingen.component';
import { StellingenBodyComponent } from './stellingen/stellingen-body/stellingen-body.component';

// services
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

// reducers
import { reducers } from './common/reducers/index';
import { auth } from './common/reducers/auth.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeBodyComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    ContactBodyComponent,
    ZelfDoenComponent,
    ZelfDoenBodyComponent,
    StellingenComponent,
    StellingenBodyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      initialState: {
        auth: null,
      }
    }),
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
