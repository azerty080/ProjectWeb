import { Action } from '../models/action';

export function questionNumber(state: any, action: Action) {
    switch (action.type) {
        case 'SET_QUESTION_NUMBER':
            return action.payload;
        default:
            return state;
    }
}
