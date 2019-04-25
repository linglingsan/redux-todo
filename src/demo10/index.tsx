import React from 'react';
import TodoListUI from './TodoListUI';
import store from './store';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList} from './store/actionCreators';
import {connect} from 'react-redux';

class Demo10 extends React.Component {
    componentWillMount(): void {
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
            const action = getAddItemAction();
            dispatch(action)
        },
        //  删除渲染异常, 待处理
        handleItemClick(index: number) {
            const action = getDeleteItemAction(index);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo10);
