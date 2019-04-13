import React from 'react';
import {Button, Input, List} from 'antd';

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
                <div className='todo-input'>
                    <Input className='todo-info' placeholder='todo_info'/>
                    <Button type='primary' className='todo-submit'>提交</Button>
                </div>
                <List
                    className='todo-list'
                    bordered
                    dataSource={data}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                   />
            </div>
        );
    }
}

export default Demo1;
