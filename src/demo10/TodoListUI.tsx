import React, {Component} from 'react';
import {Button, Col, Input, List, Row} from 'antd';
interface Props {
    value?: string;
    list?: Array<number>;
    handleInputChage: any;
    handleBtnClick: any;
    handleItemClick: any;
}

/***
 * 无状态组件(函数)
 * @param props
 * @constructor
 */
const TodoListUI = (props: Props) => {
    return (
        <div className='todo'>
            <Row type="flex" justify="center">
                <Col offset={8} span={16}>
                    <Input className='todo-info' value={props.value} onChange={props.handleInputChage}
                           placeholder='todo_info'/>
                    <Button type='primary' onClick={props.handleBtnClick}>提交</Button>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col offset={8} span={16}>
                    <List
                        className='todo-list'
                        bordered
                        dataSource={props.list}
                        renderItem={(item, index) => (<List.Item onClick={() => {
                           props.handleItemClick(index)
                        }}>{item}</List.Item>)}
                    />
                </Col>
            </Row>

        </div>
    );
}


export default TodoListUI
