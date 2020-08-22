const React = require("react")
const ReactDOMServer = require("react-dom/server")
const { ServerStyleSheet } = require("styled-components");

export class BaseLayout extends React.Component {
    getBodyElements() {
      const { children } = this.props;
  
      return <div id="app">{children}</div>;
    }
  
    prerenderStyles() {
        const sheet = new ServerStyleSheet();
        ReactDOMServer.renderToString(sheet.collectStyles(this.getBodyElements()));
        return sheet.getStyleElement();
    }
  
    render() {
      const { bodyClass } = this.props;
  
      return (
        <html lang='en'>
          <head>{this.prerenderStyles()}</head>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;531;600;700;800;900&display=swap" rel="stylesheet" />
          <style>{`
            img {
                -webkit-user-drag: none;
                -khtml-user-drag: none;
                -moz-user-drag: none;
                -o-user-drag: none;
                user-drag: none;
            }
          `}</style>

          <title>{this.props.pageTitle}</title>
  
          <body className={bodyClass}>{this.getBodyElements()}</body>
        </html>
      );
    }
}