/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react';

import { getUser } from './src/services/authenticate';

import config from './dot.config';
import { navigate } from 'gatsby';

let isLoggedIn = false;

class SessionCheck extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        isLoggedIn: false
      };
    }
  
    handleCheckSession = (user) => {
      this.setState({ loading: false, isLoggedIn: !!user });
      isLoggedIn = !!user;
    };

    getCleanRoute = () => {
        let route = window.location.pathname.split("/");
        if(route[route.length-1] === "") route.pop();
        route = route.join("/");
        route = route.length === 0 ? "/" : route;

        return route;
    }

    isPageProtected = () => {
        const route = this.getCleanRoute();

        if(config.auth.protectedPages.includes(route)) return true;
        else return false;
    }
  
    componentDidMount() {
        getUser()
            .then(data => { 
                const route = this.getCleanRoute();

                if(data.ok) {
                    if(route === "/sign-in" || route === "/sign-up") navigate("/");
                    this.handleCheckSession(data.result)
                }
            })
            .catch(err => {
                this.handleCheckSession()
                if(this.isPageProtected()) navigate("/sign-in");
            });
    }
  
    render() {
        return (
            this.state.loading === false && (
                <React.Fragment>{this.props.children}</React.Fragment>
            )
        );
    }
}

export const onRouteUpdate = ({ location }) => {
    if((location.pathname.startsWith("/sign-in") || location.pathname.startsWith("/sign-up")) && isLoggedIn) navigate("/");
}
  
export const wrapRootElement = ({ element }) => (
    <SessionCheck>
        {element}
    </SessionCheck>
);