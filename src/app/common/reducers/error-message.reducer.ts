import { Action } from '../models/action';

export function errorMessage(state: any, action: Action) {
    switch (action.type) {
        case 'SET_ERROR_MESSAGE':
            return action.payload;
        case 'CLEAR_ERROR_MESSAGE':
            return '';
        default:
            return state;
    }
}
