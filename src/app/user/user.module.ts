import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserHeaderComponent } from './user-header/user-header.component';

const USER_ROUTES: Routes = [
	{ path: '', component: UserComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(USER_ROUTES),
  ],
  declarations: [
    UserComponent,
    UserHeaderComponent
  ],
  exports: [ UserHeaderComponent ]
})
export class UserModule { }
