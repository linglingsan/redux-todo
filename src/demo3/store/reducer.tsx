import {paramsType} from '../paramsType';

const defaultState: paramsType = {
    value: '',
    list: []
};

export default (state = defaultState, acition: any): paramsType => {
    switch (acition.type) {
        case 'change_input_value':
            return Object.assign({}, state, {value: acition.value})
            break;
        case 'add_todo_item':
            const newState:any = Object.assign({}, state);
            newState.list.push(acition.value);
            newState.value = '';
            return newState
            break;
        case 'delete_todo_item':
            const deleteState: any = Object.assign({}, state);
            deleteState.list.splice(acition.index, 1);
            return deleteState
            break;
        default:
    }
    return state;
}
