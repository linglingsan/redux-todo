import React from 'react';
import {Button, Col, Input, List, Row} from 'antd';

import store from './store';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators';

class Demo2 extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStoreChage)
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

export default Demo2;
