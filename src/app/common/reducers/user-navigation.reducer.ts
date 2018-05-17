import { Action } from '../models/action';

export function userNavigation(state: any, action: Action) {
    switch (action.type) {
        case 'SET_PAGE':
            return action.payload;
        default:
            return state;
    }
}
