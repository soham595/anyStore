import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import SignUpPage from './signUpPage';
import SignInPage from "./signInPage";

class Routes extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path='/signup' component={SignUpPage}/>
                    <Route path='/signin' component={SignInPage}/>
                </Switch>
            </main>
        );
    }
}

export default Routes;
