import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Main from '../Pages/Main';
import Restourant from '../Pages/Restourant';

const Routes = () => {
    return(
        <Switch>
            <Route exact path = '/' render = {() => <Main /> } />
            <Route path = '/:id' render = {() => <Restourant /> } />
            <Redirect to =  '/' />
        </Switch>
    )
}

export default Routes;