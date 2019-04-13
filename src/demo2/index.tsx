import React from 'react';
import {Button, Col, Input, List, Row} from 'antd';

import store from './store';

class Demo2 extends React.Component{
    constructor(props: any) {
        super(props);
        this.state = store.getState();
    }
    render() {
        // @ts-ignore
        const {value, list} = this.state;
        return (
            <div className='todo'>
                <Row type="flex" justify="center">
                    <Col offset={8} span={8}>
                        <Input className='todo-info'value={value} placeholder='todo_info'/>
                        <Button type='primary'>提交</Button>
                    </Col>
                    <Col span={8}></Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col offset={8} span={8}>
                        <List
                            className='todo-list'
                            bordered
                            dataSource={list}
                            renderItem={item => (<List.Item>{item}</List.Item>)}
                        />
                    </Col>
                    <Col span={8}></Col>
                </Row>

            </div>
        );
    }
}

export default Demo2;
