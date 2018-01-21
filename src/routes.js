import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';

class routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path='/' component={App}>
                    </Route>
                </div>
            </BrowserRouter>
        );
    }
}

export default routes;
