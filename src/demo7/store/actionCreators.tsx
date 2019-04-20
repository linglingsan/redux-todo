import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionTypes';

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
