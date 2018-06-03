import { Action } from '../models/action';

export function codes(state: any, action: Action) {
    switch (action.type) {
        case 'CREATE_CODES':
            return action.payload;
        case 'ADD_CODES':
            return {
              ...state,
              codes: [...state.codes, action.payload]
            }
        case 'DELETE_CODE':
            return {
              ...state,
              codes: state.codes.filter((v) => v._id !== action.payload._id)
            }
        default:
            return state;
    }
}
