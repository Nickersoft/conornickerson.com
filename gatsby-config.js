const locale = process.env.LOCALE || 'en';

module.exports = {
  pathPrefix: locale,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'conornickerson.com',
        short_name: 'conor',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png'
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-offline',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `j5h1qw0yonwa`,
        accessToken: `d7b9172d4e9845bc0c12328b231e7c852903d8c4843bbfb2ea0ea3c563eca504`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["node_modules"],
      },
    },
  ],
}
