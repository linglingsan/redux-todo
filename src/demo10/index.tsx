import React from 'react';
import TodoListUI from './TodoListUI';
import store from './store';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList} from './store/actionCreators';
import { connect} from 'react-redux';

class Demo10 extends React.Component {
    constructor(props: any) {
        super(props);
        // this.state = store.getState();
        // store.subscribe(this.handleStoreChage)
    }

    componentDidMount(): void {
        const action = getTodoList();
        store.dispatch(action);
    }

    render() {
        // @ts-ignore
        const {value, list, handleInputChage, handleBtnClick, handleItemClick} = this.props;
        return (
            <TodoListUI
                value={value}
                list={list}
                handleInputChage={handleInputChage}
                handleBtnClick={handleBtnClick}
                handleItemClick={handleItemClick}
            />
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        value: state.value,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        handleInputChage(e: any) {
            const action = getInputChangeAction(e.target.value.trim())
           dispatch(action)
        },
        handleBtnClick() {
            // @ts-ignore
            const {value} = this.state;
            const action = getAddItemAction(value);
            dispatch(action)
        },
        handleItemClick(index: number) {
            const action = getDeleteItemAction(index);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo10);
