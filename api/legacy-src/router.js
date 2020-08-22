const { indexRoute } = require('./routes/index')
const { id } = require("./routes/id")
const { oauth } = require("./routes/oauth")
const { blog } = require("./routes/blog")
const { api } = require("./routes/api")
const { browser } = require("./routes/browser")
const { ichos } = require("./routes/ichos")
const { builds } = require("./routes/builds")
const { tempus } = require("./routes/tempus")
const { organization } = require("./routes/organization")
const { status } = require("./routes/status")

const router = [
    {
        name: "API mainpage",
        description: "Returns true if API is online.",
        methods: ['GET'],
        endpoint: '/',
        route: (req, res) => indexRoute(req, res)
    },
    {
        name: "Sign up",
        description: "Sign up for a Dot ID.",
        methods: ['POST'],
        endpoint: '/id/create',
        rateLimit: {
            enabled: true,
            maxRequests: 3,
            rateLimitMs: 15 * 60 * 1000
        },
        route: (req, res) => id.create(req, res)
    },
    {
        name: "Login",
        description: "Login to an existing Dot ID.",
        methods: ['POST'],
        endpoint: '/id/login',
        rateLimit: {
            enabled: true,
            maxRequests: 3,
            rateLimitMs: 10000,
            skipFailedRequests: true
        },
        route: (req, res) => id.login(req, res)
    },
    {
        name: "Me",
        description: "Get information about the authorized user.",
        methods: ['GET'],
        endpoint: '/id/me',
        route: (req, res) => id.me(req, res)
    },
    {
        name: "OAuth Gateway",
        description: "Authorize third party applications by logging into your Dot ID",
        methods: ['GET', 'POST'],
        endpoint: '/oauth/authorize',
        route: (req, res) => oauth.authorize(req, res)
    },
    {
        name: "OAuth Exchange Token",
        description: "Exchange code token for a temporary user token.",
        methods: ['POST'],
        endpoint: '/oauth/token',
        route: (req, res) => oauth.token(req, res)
    },
    {
        name: "Blog Posts",
        description: "Get all blog posts",
        methods: ['GET'],
        endpoint: '/blog/posts/:slug?',
        route: (req, res) => blog.posts(req, res)
    },
    {
        name: "Create Blog Post",
        description: "Create a blog post",
        methods: ['POST'],
        endpoint: '/blog/createPost',
        route: (req, res) => blog.create(req, res)
    },
    {
        name: "Deprecated API",
        description: "You will be redirected to this page if an API is deprecated.",
        methods: ['GET'],
        endpoint: '/api/deprecated',
        route: (req, res) => api.deprecated(req, res)
    },
    {
        name: "News",
        description: "Get some news",
        methods: ['GET'],
        endpoint: '/browser/news',
        route: (req, res) => browser.news(req, res)
    },
    {
        name: "Get All Limelight Images",
        description: "Get all Limelight images or grab a random one",
        methods: ['GET'],
        endpoint: '/browser/limelight',
        route: (req, res) => browser.limelight(req, res)
    },
    {
        name: "Get the user's IP",
        description: "Get the user's IP for IP Hide Service",
        methods: ['GET'],
        endpoint: '/browser/ip',
        route: (req, res) => browser.ip(req, res)
    },
    {
        name: "Grab a certificate",
        description: "Grab the certificate for a URL",
        methods: ['GET'],
        endpoint: '/browser/cert/:url',
        route: (req, res) => browser.certificate(req, res)
    },
    {
        name: "Get information about a shortened URL",
        description: "Get JSON information on a shortened URL",
        methods: ['GET'],
        endpoint: '/api/shortened',
        route: (req, res) => api.shortened(req, res)
    },
    {
        name: "Get All Podcasts",
        description: "Get All Podcasts for Ichos",
        methods: ['GET'],
        endpoint: '/ichos/podcasts',
        route: (req, res) => ichos.podcasts(req, res)
    },
    {
        name: "WHEREAMI",
        description: "Get your current country",
        methods: ['GET'],
        endpoint: '/ichos/whereami',
        route: (req, res) => ichos.whereami(req, res)
    },
    {
        name: "Beta",
        description: "Download Beta releases from the server",
        methods: ['GET'],
        endpoint: '/api/beta',
        route: (req, res) => api.beta(req, res)
    },
    {
        name: "Build information",
        description: "Get information on a Dot HQ build",
        methods: ['GET'],
        endpoint: '/builds/info/:id',
        route: (req, res) => builds.info(req, res)
    },
    {
        name: "Get all builds",
        description: "Get all Dot HQ builds",
        methods: ['GET'],
        endpoint: '/builds/all',
        route: (req, res) => builds.all(req, res)
    },
    {
        name: "Create build",
        description: "Create a Dot HQ build which will appear in the website",
        methods: ['POST'],
        endpoint: '/builds/create',
        route: (req, res) => builds.create(req, res)
    },
    {
        name: "Delete build",
        description: "Delete an existing Dot HQ build",
        methods: ['DELETE'],
        endpoint: '/builds/delete/:id',
        route: (req, res) => builds.delete(req, res)
    },
    {
        name: "Tempus Mailbox",
        description: "View your temporary email inbox",
        methods: ['GET', 'POST', 'DELETE'],
        endpoint: '/tempus/inbox',
        route: (req, res) => tempus.inbox(req, res) 
    },
    {
        name: "Tempus Token",
        description: "Generate a token for your Tempus mailbox",
        methods: ['GET', 'POST', 'DELETE'],
        endpoint: '/tempus/login',
        route: (req, res) => tempus.login(req, res) 
    },
    {
        name: "Organization Codes",
        description: "Generate codes, get codes and verify organization codes",
        methods: ['GET', 'POST', 'PUT'],
        endpoint: '/organization/codes/:code?',
        route: (req, res) => organization.codes(req, res)
    },
    {
        name: "Organization Verify Email",
        description: "Verify your email to make sure the code is definitely yours",
        methods: ['POST'],
        endpoint: '/organization/verify',
        route: (req, res) => organization.verify(req, res)
    },
    {
        name: "Get all status monitors",
        description: "Get all the status monitors for the status page",
        methods: ['GET'],
        endpoint: '/status/monitors',
        route: (req, res) => status.monitors(req, res)
    },
    {
        name: "Get GitHub access token",
        description: "Get a GitHub access token for a authenticated GitHub SSO.",
        methods: ['POST'],
        endpoint: '/sso/github',
        route: (req, res) => api.githubSSO(req, res)
    },
]

const routerSettings = {
    base: '/api',
    port: 4000,
    performance: {
        start: Date.now()
    }
}

exports.router = router;
exports.routerSettings = routerSettings;
