import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Start from './pages/Start'; 

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Start} /> 
            </Switch>
        </BrowserRouter>
    )
}