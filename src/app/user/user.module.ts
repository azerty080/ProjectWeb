import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserHeaderComponent } from './user-header/user-header.component';

import { CodeService } from '../services/code.service';
import { AddCodeModalComponent } from './add-code-modal/add-code-modal.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const USER_ROUTES: Routes = [
	{ path: '', component: UserComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(USER_ROUTES),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    UserComponent,
    UserHeaderComponent,
    AddCodeModalComponent,
    UserDetailsComponent
  ],
  exports: [ UserHeaderComponent ],
  providers: [ CodeService ]
})
export class UserModule { }
