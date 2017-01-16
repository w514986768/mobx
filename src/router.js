import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Index from './routes/Index';
import Hello from './routes/Hello';

export const ReactRouter = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={Index}/>
            <Route path="/hello" component={Hello}/>
        </Router>
    )
};
