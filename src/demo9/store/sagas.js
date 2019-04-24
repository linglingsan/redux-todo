import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
import {GET_INIT_LIST} from './actionTypes';
import {initListAction} from './actionCreators'
function* getInitList() {
    try {
        const res = yield axios.get('/list.json');
        const action = initListAction(res.data);
        yield put(action)
    }catch (e) {
        console.log(e);
    }

}
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
