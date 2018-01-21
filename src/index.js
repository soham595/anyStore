import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from './navigationBar';

ReactDOM.render(

    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={NavigationBar}/>
            <Route path='/home' exact component={NavigationBar}/>
        </Switch>
    </BrowserRouter>,

    document.getElementById('root')
);

registerServiceWorker();
