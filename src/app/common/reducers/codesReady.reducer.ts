import { Action } from '../models/action';

export function codesReady(state: any, action: Action) {
    switch (action.type) {
        case 'CODES_READY':
            return true;
        case 'CODES_NOT_READY':
            return false;
        default:
            return state;
    }
}
