import React from 'react';
import {Button, Col, Input, List, Row} from 'antd';

class Demo1 extends React.Component {
    render() {
        const data = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
        ];
        return (
            <div className='todo'>
                <Row type="flex" justify="center">
                    <Col offset={8} span={16}>
                        <Input className='todo-info' placeholder='todo_info'/>
                        <Button type='primary'>提交</Button>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col offset={8} span={16}>
                        <List
                            className='todo-list'
                            bordered
                            dataSource={data}
                            renderItem={item => (<List.Item>{item}</List.Item>)}
                        />
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Demo1;
