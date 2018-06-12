import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';

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
import { RegisterComponent } from './register/register.component';
import { SeksueleIntimidatieComponent } from './home/home-body/seksuele-intimidatie/seksuele-intimidatie.component';
import { StrafbaarComponent } from './home/home-body/strafbaar/strafbaar.component';
import { AangifteComponent } from './home/home-body/aangifte/aangifte.component';
import { SlachtofferComponent } from './zelf-doen/zelf-doen-body/slachtoffer/slachtoffer.component';
import { GetuigeComponent } from './zelf-doen/zelf-doen-body/getuige/getuige.component';
import { PlegerComponent } from './zelf-doen/zelf-doen-body/pleger/pleger.component';
import { GameComponent } from './game/game.component';
import { QuestionModalComponent } from './game/question-modal/question-modal.component';
import { CodeModalComponent } from './game/code-modal/code-modal.component';
import { GameDisplayComponent } from './game/game-display/game-display.component';
import { ErrorMessageComponent } from './error-message/error-message.component';

// services
import { AuthService } from './services/auth.service';
import { QuestionService } from './services/question.service';
import { AuthGuard } from './guards/auth.guard';

// reducers
import { reducers } from './common/reducers/index';
import { auth } from './common/reducers/auth.reducer';
import { codes } from './common/reducers/codes.reducer';
import { userNavigation} from './common/reducers/user-navigation.reducer';
import { questionModal } from './common/reducers/question-modal.reducer';
import { questionNumber } from './common/reducers/question-number.reducer';
import { errorMessage } from './common/reducers/error-message.reducer';
import { responsiveNagivation } from './common/reducers/responsive-navigation.reducer';

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
    StellingenBodyComponent,
    RegisterComponent,
    SeksueleIntimidatieComponent,
    StrafbaarComponent,
    AangifteComponent,
    SlachtofferComponent,
    GetuigeComponent,
    PlegerComponent,
    GameComponent,
    QuestionModalComponent,
    CodeModalComponent,
    GameDisplayComponent,
    ErrorMessageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      initialState: {
        auth: null,
        codes: null,
        userNavigation: 'details',
        questionModal: false,
        questionNumber: 0,
        errorMessage: '',
        responsiveNagivation: false,
      }
    }),
    UserModule
  ],
  providers: [AuthService, QuestionService, AuthGuard, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
