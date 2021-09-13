require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Faith in Travels`,
    description: `Cestovni blog`,
    siteUrl: `https://www.faithintravel.cz`,
    author: `@Lukas Valta <valtalukas@sezanm.cz>`,
    social: {
      twitter: `Lukas`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
        disableAutoprefixing: true,
        disableMinification: true,
      },
    },
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `xm8ql6j0af6m`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: "faithintravel-34053.firebaseapp.com",
          projectId: "faithintravel-34053",
          storageBucket: "faithintravel-34053.appspot.com",
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
          measurementId: process.env.FIREBASE_MEASUREMENT_ID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `faithintravel.cz`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logoBlack.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries: require("./src/utils/algolia-queries"),
        chunkSize: 10000,
      },
    },
  ],
}
