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

import { parse } from 'search-params' 

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

// const checkSession = (dispatch) => {
//     if(isBrowser()) window.isLoggedIn = false;

//     getUser()
//         .then((res) => { 
//             console.log(res)

//             if(!res) return;
//             if(isBrowser()) window.isLoggedIn = !!res;

//             dispatch({ loaded: true, user: res, authenticated: true });
//         })
//         .catch(err => {
//             dispatch({ loaded: true, authenticated: false })
//         });
// }

const SessionCheck = ({ children }) => {
    const [state, dispatch] = useGlobalState();

    const location = isBrowser() && window.location;
    const query = parse(location.search);

    React.useState(() => {
        if(document.cookie.indexOf("_dotid_loggedin") === -1) {
            if(location.pathname.startsWith("/sign-in")) return;

            if(config.auth.protectedPages.includes(location.pathname.replace(/\/$/, ""))) {
                return window.___navigate(`/sign-in?next=${encodeURIComponent(location.pathname + location.search)}`)
            }
        } else {
            if(location.pathname.startsWith("/sign-in")) window.___navigate(query.next ? decodeURIComponent(query.next) : "/");

            getUser()
                .then((res) => { 
                    if(!res) return;
                    if(isBrowser()) window.isLoggedIn = !!res;

                    dispatch({ loaded: !!res, user: res });
                })
                .catch(err => dispatch({ loaded: true }));
        }

        dispatch({ loaded: true })
    }, [document.cookie])

    return <div style={{ display: state.loaded ? "" : "none" }}>{children}</div>
}

export const onPreRouteUpdate = () => {
    const location = isBrowser() && window.location;
    const query = parse(location.search);

    if(document.cookie.indexOf("_dotid_loggedin") === -1) {
        if(location.pathname.startsWith("/sign-in")) return;

        if(config.auth.protectedPages.includes(location.pathname.replace(/\/$/, ""))) {
            return window.___navigate(`/sign-in?next=${encodeURIComponent(location.pathname + location.search)}`)
        }
    } else {
        if(location.pathname.startsWith("/sign-in")) window.___navigate(query.next ? decodeURIComponent(query.next) : "/");
    }
}
  
export const wrapRootElement = ({ element, location }) => (
    <GlobalStateProvider>
        <SessionCheck location={location}>
            {element}
        </SessionCheck>
    </GlobalStateProvider>
);