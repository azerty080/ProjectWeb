import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ZelfDoenComponent } from './zelf-doen/zelf-doen.component';
import { StellingenComponent } from './stellingen/stellingen.component';
import { ContactComponent } from './contact/contact.component';

import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{ path: 'login', component: LoginComponent, pathMatch: 'full' },
	{ path: 'wat-kan-je-zelf-doen', component: ZelfDoenComponent, pathMatch: 'full' },
	{ path: 'stellingen', component: StellingenComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule', canActivate: [AuthGuard] },

	// { path: '**', component: PageNotFoundComponent }
]

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
