const express = require("express");
const bodyParser = require("body-parser")
const chalk = require("chalk");
const path = require("path");
const cookieParser = require("cookie-parser");
const expressip = require('express-ip');

const app = express();

const { startDatabases } = require("./src/mongo");
const { routerSettings } = require("./src/router");
const { startRouteManager } = require("./src/routeManager");

app.use(expressip().getIpInfoMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.setHeader('X-Powered-By', '\xE2\x9A\xA1')
    next()
})

const allowedOrigins = ["http://localhost:8000", "https://dothq.co", "https://ichos.dothq.co", "https://search.dothq.co", "http://localhost:9015", "http://localhost:9000", "dot://newtab", "https://status.dothq.co"];

app.use(function(req, res, next) {
  let origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Dot-NTP"
  );

  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE"
  );
  next();
});

app.use(expressip().getIpInfoMiddleware);
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const port = routerSettings.port;

process.env.DB_USERNAME = require("./credentials.json")['DB_USERNAME']
process.env.DB_PASSWORD = require("./credentials.json")['DB_PASSWORD']
process.env.DB_PORT = require("./credentials.json")['DB_PORT']

startRouteManager(app);
startDatabases();

app.set('trust proxy', true)
app.set('views', path.resolve(__dirname, "src", "views"));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.listen(port, () => console.log(`${chalk.bold.blue('API')} Loaded application on port ${port} in ${Date.now() - routerSettings.performance.start}ms`))