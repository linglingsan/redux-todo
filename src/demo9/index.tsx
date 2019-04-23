import React from 'react';
import TodoListUI from './TodoListUI';
import store from './store';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList} from './store/actionCreators';

class Demo9 extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStoreChage)
    }

    componentDidMount(): void {
        const action = getTodoList();
        store.dispatch(action);
        /* axios.get('/list.json')
             .then(res => {
                 const {data} = res;
                 const action = initListAction(data);
                 store.dispatch(action)
             })*/
    }

    handleInputChage = (e: any) => {
        const action = getInputChangeAction(e.target.value.trim())
        store.dispatch(action)
    }

    handleBtnClick = () => {
        // @ts-ignore
        const {value} = this.state;
        const action = getAddItemAction(value);
        store.dispatch(action)
    }

    handleItemClick = (index: number) => {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }

    handleStoreChage = () => {
        this.setState(store.getState());
    }

    render() {
        // @ts-ignore
        const {value, list} = this.state;
        return (
            <TodoListUI
                value={value}
                list={list}
                handleInputChage={this.handleInputChage}
                handleBtnClick={this.handleBtnClick}
                handleItemClick={this.handleItemClick}
            />
        );
    }
}

export default Demo9;
