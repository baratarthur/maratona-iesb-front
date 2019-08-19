import React from 'react';
import { 
    BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';

// importanto componentes de páginas
import {
    DefaultChart
} from './pages';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={DefaultChart} />
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
);

export default Routes;