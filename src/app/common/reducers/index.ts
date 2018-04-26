import { ActionReducerMap } from '@ngrx/store';

import { auth } from './auth.reducer';

export interface State {
  auth: any,
}

export const reducers: ActionReducerMap<any> = {
  auth,
};
