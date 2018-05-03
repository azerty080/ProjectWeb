import { Action } from '../models/action';

export function codes(state: any, action: Action) {
    switch (action.type) {
        case 'CREATE_CODES':
            return action.payload;
        case 'ADD_CODES':
            return [action.payload, ...state];
        case 'DELETE_CODE':
            return state.filter((v) => v.id !== action.payload);
        default:
            return state;
    }
}
