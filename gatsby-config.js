module.exports = {
  pathPrefix: `/nb`,
  siteMetadata: {
    title: `ProKinO: Protein Kinase Ontology Browser`,
    description: `You can use this ontology browser to quickly locate protein kinase proteins and a lot of information related to the proteins, including the sequence, structure, function, mutation and pathway information on kinases.`,
    author: `Saber Soleymani`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      options: {
        name: `cif`,
        path: `${__dirname}/static/cif`,
      },
    },
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
    // {
    //   resolve: `@lekoarts/gatsby-theme-specimens`,
    //   options: {}

    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
