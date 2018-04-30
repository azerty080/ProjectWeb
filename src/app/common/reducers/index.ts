import { ActionReducerMap } from '@ngrx/store';

import { auth } from './auth.reducer';
import { codes } from './codes.reducer';
import { codesReady } from './codesReady.reducer';

export interface State {
  auth: any,
  codes: any,
  codesReady: any;
}

export const reducers: ActionReducerMap<any> = {
  auth,
  codes,
  codesReady,
};
