import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionTypes'
import {paramsType} from '../paramsType';

const defaultState: paramsType = {
    value: '',
    list: []
};

export default (state = defaultState, acition: any): paramsType => {
    switch (acition.type) {
        case CHANGE_INPUT_VALUE:
            return Object.assign({}, state, {value: acition.value})
            break;
        case ADD_TODO_ITEM:
            const newState:any = Object.assign({}, state);
            newState.list.push(acition.value);
            newState.value = '';
            return newState
            break;
        case DELETE_TODO_ITEM:
            const deleteState: any = Object.assign({}, state);
            deleteState.list.splice(acition.index, 1);
            return deleteState
            break;
        default:
    }
    return state;
}
