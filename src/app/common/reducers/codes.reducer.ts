import { Action } from '../models/action';

export function codes(state: any, action: Action) {
    switch (action.type) {
        case 'CREATE_CODES':
            return action.payload;
        case 'ADD_CODES':
            console.log([action.payload, ...state]);
            return [action.payload, ...state];
        case 'DELETE_CODES':
            return null;
        default:
            return state;
    }
}
