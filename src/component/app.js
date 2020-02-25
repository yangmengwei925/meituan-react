// 根
import React, { Component } from 'react';
import store from '../store'
import RootRouters from '../router'
import {Provider} from 'react-redux'
// import Home from './home'
class app extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootRouters></RootRouters>
            </Provider>
            // <Home></Home>
        );
    }
}

export default app;