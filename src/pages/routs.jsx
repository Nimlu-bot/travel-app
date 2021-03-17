import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { HomePage } from './HomePage';
import { CountryPage } from './CountryPage';
import { AuthPage } from './AuthPage';

export const useRouts = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/home' exact>
                    <HomePage />
                </Route>
                <Route path='/country/:id'>
                    <CountryPage />
                </Route>
                <Redirect to='/home' />
            </Switch>
        );
    }
    return (
        <Switch>
            <Route path='/' exact>
                <AuthPage />
            </Route>
            <Route path='/home' exact>
                <HomePage />
            </Route>
            <Route path='/country/:id' exact>
                <CountryPage />
            </Route>
            <Redirect to='/' />
        </Switch>
    );
};
