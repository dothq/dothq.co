/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react';

import { getUser } from './src/services/authenticate';
import { isBrowser } from './lib/helpers/login'

import config from './dot.config';
import { navigate } from 'gatsby';

import { defaultGlobalState, globalStateContext, dispatchStateContext, useGlobalState } from "./src/store"

const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(
        (state, newValue) => ({ ...state, ...newValue }),
        defaultGlobalState
    );

    return (
        <globalStateContext.Provider value={state}>
            <dispatchStateContext.Provider value={dispatch}>
                {children}
            </dispatchStateContext.Provider>
        </globalStateContext.Provider>
    );
};

const SessionCheck = ({ children }) => {
    const location = isBrowser() && window.location;

    const [state, dispatch] = useGlobalState();

    React.useEffect(() => {
        if(isBrowser()) window.isLoggedIn = false;

        getUser()
            .then((res) => { 
                if(!res) return;
                if(isBrowser()) window.isLoggedIn = !!res;

                dispatch({ loaded: !!res, user: res });
            })
            .catch(err => dispatch({ loaded: true }));
    }, [dispatch, location]);

    return (
        state.loaded === true && (
            <React.Fragment>{children}</React.Fragment>
        )
    )
}

export const onPreRouteUpdate = ({ location }) => {
    const route = location.pathname.replace(/\/$/, "");

    if(config.auth.protectedPages.includes(route) && (isBrowser() && !window.isLoggedIn)) navigate("/sign-in");
    else if((route.startsWith("/sign-in") || route.startsWith("/sign-up")) && window.isLoggedIn) navigate("/");
}
  
export const wrapRootElement = ({ element }) => (
    <GlobalStateProvider>
        <SessionCheck>
            {element}
        </SessionCheck>
    </GlobalStateProvider>
);