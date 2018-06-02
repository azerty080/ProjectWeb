import { ActionReducerMap } from '@ngrx/store';

import { auth } from './auth.reducer';
import { codes } from './codes.reducer';
import { userNavigation } from './user-navigation.reducer';
import { questionModal } from './question-modal.reducer';

export interface State {
  auth: any,
  codes: any,
  userNavigation: any,
  questionModal: any;
}

export const reducers: ActionReducerMap<any> = {
  auth,
  codes,
  userNavigation,
  questionModal,
};
