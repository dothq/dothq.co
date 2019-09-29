import React from "react";
import ErrorPage from "./../components/Error/index";

function Error({ statusCode }) {
  return <ErrorPage />;
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default Error;
