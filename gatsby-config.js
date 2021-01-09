module.exports = {
  siteMetadata: {
    title: `Dot HQ`,
    description: `Take back your privacy with Dot HQ's Dot Browser, the privacy-conscious web browser that protects you from being tracked and monitored online.`,
    author: `Dot HQ`,
    siteUrl: "https://dothq.co"
  },
  proxy: {
    prefix: "/api",
    url: "http://localhost:4000",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/assets/fonts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dot Browser`,
        short_name: `Dot`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#fafafa`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-emojis",
            options: {
              active: true,
              class: "emoji-icon",
              escapeCharacter: "",
              size: 16,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
        once: true,
        disable: false,

        selector: "[data-sal]",
        animateClassName: "sal-animate",
        disabledClassName: "sal-disabled",
        rootMargin: "0% 50%",
        enterEventName: "sal:in",
        exitEventName: "sal:out",
      },
    },
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: require(`${__dirname}/src/theme.js`).lightTheme,
        dark: require(`${__dirname}/src/theme.js`).lightTheme,
      },
    },
    {
      resolve: "gatsby-plugin-express",
      options: {
        output: "gatsby.json",
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["NODE_ENV"],
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-sitemap`
  ],
}
