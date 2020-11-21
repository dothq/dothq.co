import React from "react";

export const defaultGlobalState = {
    user: null,
    isLoggedIn: false,
    loaded: false
};

export const globalStateContext = React.createContext(defaultGlobalState);
export const dispatchStateContext = React.createContext(undefined);

export const useGlobalState = () => [
    React.useContext(globalStateContext),
    React.useContext(dispatchStateContext)
];