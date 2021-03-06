import React from 'react';
import {Button, Col, Input, List, Row} from 'antd';

import store from './store';
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes'

import {paramsType} from './paramsType';

class Demo4 extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStoreChage)
    }

    handleInputChage = (e: any) => {
        const action = {
            type: CHANGE_INPUT_VALUE,
            value: e.target.value
        }
        store.dispatch(action)
    }

    handleBtnClick = () => {
        // @ts-ignore
        const {value} = this.state;
        const action = {
            type: ADD_TODO_ITEM,
            value
        }
        store.dispatch(action)
    }

    handleItemClick = (index: number) => {
        const action = {
            type: DELETE_TODO_ITEM,
            index
        }
        store.dispatch(action);
    }

    handleStoreChage = () => {
        this.setState(store.getState());
    }

    render() {
        // @ts-ignore
        const {value, list} = this.state;
        return (
            <div className='todo'>
                <Row type="flex" justify="center">
                    <Col offset={8} span={16}>
                        <Input className='todo-info' value={value} onChange={this.handleInputChage}
                               placeholder='todo_info'/>
                        <Button type='primary' onClick={this.handleBtnClick}>提交</Button>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col offset={8} span={16}>
                        <List
                            className='todo-list'
                            bordered
                            dataSource={list}
                            renderItem={(item, index) => (<List.Item onClick={()=> {this.handleItemClick(index)}}>{item}</List.Item>)}
                        />
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Demo4;
