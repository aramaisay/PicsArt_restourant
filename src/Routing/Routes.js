import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Restourant from '../Pages/Restourant';
import SuspenseComponent from '../Components/SuspenseComponent';
import { fillTheStore } from '../Hooks/useFetch';

const Main = lazy(() => {
    return Promise.all([fillTheStore( 'getTypes', {text: ''} ), import('../Pages/Main')])
    .then((data) => data[1])
});

const Routes = () => {
    return(
        <Switch>
            <Route exact path = '/' render = {() => <SuspenseComponent> <Main /> </SuspenseComponent> } />
            <Route path = '/:id' render = {() => <Restourant /> } />
            <Redirect to =  '/' />
        </Switch>
    )
}

export default Routes;