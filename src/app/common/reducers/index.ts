import { ActionReducerMap } from '@ngrx/store';

import { auth } from './auth.reducer';
import { codes } from './codes.reducer';
import { userNavigation } from './user-navigation.reducer';

export interface State {
  auth: any,
  codes: any,
  userNavigation: any,
}

export const reducers: ActionReducerMap<any> = {
  auth,
  codes,
  userNavigation,
};
