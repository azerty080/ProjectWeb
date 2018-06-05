import { ActionReducerMap } from '@ngrx/store';

import { auth } from './auth.reducer';
import { codes } from './codes.reducer';
import { userNavigation } from './user-navigation.reducer';
import { questionModal } from './question-modal.reducer';
import { questionNumber } from './question-number.reducer';
import { errorMessage } from './error-message.reducer';

export interface State {
  auth: any,
  codes: any,
  userNavigation: any,
  questionModal: any,
  questionNumber: any,
  errorMessage: any;
}

export const reducers: ActionReducerMap<any> = {
  auth,
  codes,
  userNavigation,
  questionModal,
  questionNumber,
  errorMessage
};
