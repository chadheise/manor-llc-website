module.exports = {
  siteMetadata: {
    title: `Manor LLC`,
    description: `Home for Manor LLC apps`,
    author: `manorllc`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown/`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `manor-llc`,
        short_name: `Manor LLC`,
        start_url: `/`,
        background_color: `#d6c72a`,
        theme_color: `#d6c72a`,
        display: `minimal-ui`,
        icon: `src/images/pace-calc-icon.png`,
      },
    },
  ],
}
