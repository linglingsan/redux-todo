import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './demo10/store';
import Demo from './demo10';

class TodoList extends Component {
    render() {
        return (
            //  demo10
            <Provider store={store}>
                <Demo/>
            </Provider>
          /*//  demo1 - demo9
          <Demo/>*/
        );
    }
}

export default TodoList;
