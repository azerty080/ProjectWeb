import { Action } from '../models/action';

export function responsiveNagivation(state: any, action: Action) {
    switch (action.type) {
        case 'SET_NAVIGATION':
            return state = !state;
        default:
            return state;
    }
}
