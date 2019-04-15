import {paramsType} from '../paramsType';

const defaultState: paramsType = {
    value: '11',
    list: [1, 2, 3]
};

export default (state = defaultState, acition: any): paramsType => {
    switch (acition.type) {
        case 'change_input_value':
            return Object.assign({}, state, {value: acition.value})
            break;
    }
    return state;
}
