require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  // pathPrefix: `/nb`,

  siteMetadata: {
    title: `ProKinO: Protein Kinase Ontology Browser`,
    description: `You can use this ontology browser to quickly locate protein kinase proteins and a lot of information related to the proteins, including the sequence, structure, function, mutation and pathway information on kinases.`,
    author: `Saber Soleymani`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-less`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `allfiles`,
        path: `${__dirname}/static`,
      }
    },
    `gatsby-plugin-fontawesome-css`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins:300,400,500,600,700`,
          `Lalezar`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-3ZLG03GB33", // Google Analytics for https://prokino.netlify.app
          "G-5BS9V954C3", // Google Analytics for https://prokino.uga.edu
          //"", // Google Analytics for https://vulcan.cs.uga.edu
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          head: true, // Puts tracking script in the head instead of the body

        },
      },
    },
    { resolve: "gatsby-plugin-no-sourcemaps" }
    // {
    //   resolve: `@lekoarts/gatsby-theme-specimens`,
    //   options: {}

    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
