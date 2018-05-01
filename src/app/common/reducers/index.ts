import { ActionReducerMap } from '@ngrx/store';

import { auth } from './auth.reducer';
import { codes } from './codes.reducer';

export interface State {
  auth: any,
  codes: any,
}

export const reducers: ActionReducerMap<any> = {
  auth,
  codes,
};
