import {paramsType} from '../paramsType';
const defaultState: paramsType = {
    value: '11',
    list: [1, 2, 3]
};

export default (state = defaultState, acition: object): paramsType => {
    return state;
}
