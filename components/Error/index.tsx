import React from "react";
import {
  ErrorApp,
  ErrorContainer,
  ErrorTitle,
  ErrorStack,
  ErrorContinue,
  ErrorCursor
} from "./style";
import { Style } from "react-style-tag";

class ErrorPage extends React.Component {
  public location: string = "";
  public cursorState: boolean = true;

  componentDidMount() {
    setInterval(() => {
      this.cursorState = this.cursorState == true ? false : true;
      this.forceUpdate();
    }, 500);

    this.location = window.location.pathname;
    this.forceUpdate();

    window.addEventListener("keydown", e => {
      if (e.ctrlKey == false && e.altKey == false && e.shiftKey == false) {
        window.location.href = "/";
      }
    });
  }

  render() {
    return (
      <ErrorApp>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"
        ></meta>
        <Style>{`

            body {
                display: -webkit-flex;
                display: flex;
                -webkit-align-items: center;
                align-items: center;
                -webkit-justify-content: center;
                justify-content: center;
            }

            html {
                overflow: hidden;
                font-family: monospace;
                font-style: normal;
                font-stretch: normal;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                vertical-align: baseline;
                -webkit-tap-highlight-color: transparent;
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
                text-size-adjust: 100%;
                background: #0000cd;
                color: #fff;
                font-size: 16px;
            }

            body, html {
                width: 100%;
                height: 100%;
            }

            * {
                margin: 0px;
                padding: 0px;
                box-sizing: border-box;
            }
        `}</Style>
        <ErrorContainer>
          <ErrorTitle>404 Not found</ErrorTitle>
          <ErrorStack>
            Oh fiddlesticks, what now?
            <br />
            We couldn't find {this.location}. Here are some of the things you
            can try though.
            <br />
            <br />
            * Make sure the url is correct.
            <br />* Avoid panicking.
            <br />* Press Ctrl+Alt+Delete
            <br />* Sell a kidney
          </ErrorStack>
          <ErrorContinue>Press any key to continue</ErrorContinue>
          <ErrorCursor>{this.cursorState == true ? "_" : "   "}</ErrorCursor>
        </ErrorContainer>
      </ErrorApp>
    );
  }
}

export default ErrorPage;
