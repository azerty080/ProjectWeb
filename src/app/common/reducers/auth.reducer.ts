import { Action } from '../models/action';

export function auth(state: any, action: Action) {
    switch (action.type) {
        case 'CREATE_AUTH':
            console.log(action);
            return action.payload;
        case 'UPDATE_USER_INFO':
            return Object.assign(state, action.payload);
        case 'DELETE_AUTH':
            return null;
        default:
            return state;
    }
}
