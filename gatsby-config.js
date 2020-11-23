const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config(process.env.API_KEY)
}

console.log()

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Fede Castañares`,
        start_url: `/`,
        background_color: `#24292e`,
        theme_color: `#24292e`,
        display: `minimal-ui`,
        icon: `src/images/fede.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: "8d7123235900822bbd8b054409f670",
        environment: `master`,
        previewMode: false,
        disableLiveReload: false,
        apiUrl: 'https://site-api.datocms.com',
        localeFallbacks: {
          it: ['es'],
        },
      },
    },
  ],
}
