import { Action } from '../models/action';

export function questionModal(state: any, action: Action) {
    switch (action.type) {
        case 'SET_MODAL':
            return action.payload;
        default:
            return state;
    }
}
