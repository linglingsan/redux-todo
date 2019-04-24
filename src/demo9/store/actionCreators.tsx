import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST} from './actionTypes';


export const getInputChangeAction = (value: string) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = (value: string) => ({
    type: ADD_TODO_ITEM,
    value
})

export const getDeleteItemAction = (index: number) => ({
    type: DELETE_TODO_ITEM,
    index
})
export const initListAction = (data: object) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getInitList = () => ({
    type: GET_INIT_LIST
})

/*export const getTodoList = () => {
    return (dispatch: any) => {
        axios.get('/list.json')
            .then(res => {
                const {data} = res;
                const action = initListAction(data);
                dispatch(action)
            })
    }
}*/
