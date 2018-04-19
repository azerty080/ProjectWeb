import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
	{ path: '', component: LoginComponent, pathMatch: 'full' },
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
