import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import SignUpPage from './signUpPage';

class Routes extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path='/signup' component={SignUpPage}/>
                </Switch>
            </main>
        );
    }
}

export default Routes;
