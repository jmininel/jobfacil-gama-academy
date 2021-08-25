import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landind from '../src/pages/Landing';

import Cep from '../src/pages/Cep'

function Routes() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Landind} />
         
            <Route path="/cep" component={Cep} />
            </Switch> 
        </BrowserRouter>

    );
}

export default Routes;

