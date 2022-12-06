const pathPrefix = process.env.TRAVIS_BRANCH === 'master' ? '/' : (process.env.PATH_PREFIX || '/');

module.exports = {
  siteMetadata: {
    title: 'IBM Cloud Enterprise Run Books',
    description: 'IBM Cloud Enterprise Sandbox Run Books',
    keywords: 'ibm,cloud,runbooks',
  },
  pathPrefix: "/gatsby",
  plugins: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        repository: {
          baseUrl:
              'https://github.com/gatsby',
          subDirectory: '/',
        },
      },
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: './src/data'
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-155887541-3",
        head: true
      },
    }
  ]
};
