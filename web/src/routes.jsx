import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landind from '../src/pages/Landing';
import Form from '../src/pages/Form';


 
function Routes() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Landind} />
            <Route path="/formulario" component={Form} /> 
          </Switch>
        </BrowserRouter>

    );
}

export default Routes;