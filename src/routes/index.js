import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import App from '../App';

export default () => (
    <HashRouter>
        <Route exact path="/" component={App} />
    </HashRouter>
);