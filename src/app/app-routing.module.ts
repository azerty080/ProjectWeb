import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ZelfDoenComponent } from './zelf-doen/zelf-doen.component';
import { StellingenComponent } from './stellingen/stellingen.component';
import { ContactComponent } from './contact/contact.component';

import { AuthGuard } from './guards/auth.guard';
import {SeksueleIntimidatieComponent} from './home/home-body/seksuele-intimidatie/seksuele-intimidatie.component';
import {StrafbaarComponent} from './home/home-body/strafbaar/strafbaar.component';
import {AangifteComponent} from './home/home-body/aangifte/aangifte.component';
import {SlachtofferComponent} from './zelf-doen/zelf-doen-body/slachtoffer/slachtoffer.component';
import {GetuigeComponent} from './zelf-doen/zelf-doen-body/getuige/getuige.component';
import {PlegerComponent} from './zelf-doen/zelf-doen-body/pleger/pleger.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'wat-is-seksuele-intimidatie/wat-is-seksuele-intimidatie', pathMatch: 'full' },
  { path: 'wat-is-seksuele-intimidatie', redirectTo: 'wat-is-seksuele-intimidatie/wat-is-seksuele-intimidatie', pathMatch: 'full' },
  { path: 'wat-is-seksuele-intimidatie/wat-is-seksuele-intimidatie', component: HomeComponent, pathMatch: 'full', children:
      [{path: '', component: SeksueleIntimidatieComponent, outlet: 'content'}] },
  { path: 'wat-is-seksuele-intimidatie/welk-gedrag-is-strafbaar', component: HomeComponent, pathMatch: 'full', children:
      [{path: '', component: StrafbaarComponent, outlet: 'content'}] },
  { path: 'wat-is-seksuele-intimidatie/hoe-kan-ik-aangifte-doen', component: HomeComponent, pathMatch: 'full', children:
      [{path: '', component: AangifteComponent, outlet: 'content'}] },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'wat-kan-je-zelf-doen', redirectTo: 'wat-kan-je-zelf-doen/als-slachtoffer', pathMatch: 'full' },
  { path: 'wat-kan-je-zelf-doen/als-slachtoffer', component: ZelfDoenComponent, pathMatch: 'full', children:
      [{path: '', component: SlachtofferComponent, outlet: 'content'}] },
  { path: 'wat-kan-je-zelf-doen/als-getuige', component: ZelfDoenComponent, pathMatch: 'full', children:
      [{path: '', component: GetuigeComponent, outlet: 'content'}] },
  { path: 'wat-kan-je-zelf-doen/als-pleger', component: ZelfDoenComponent, pathMatch: 'full', children:
      [{path: '', component: PlegerComponent, outlet: 'content'}] },
  { path: 'stellingen', component: StellingenComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule', canActivate: [AuthGuard] },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: true, // <-- debugging purposes only
        // preloadingStrategy: SelectivePreloadingStrategy,
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }
