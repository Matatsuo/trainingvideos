module.exports = {
  siteMetadata: {
    title: 'Medi-Map',
    subtitle: 'Training Videos',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [require('autoprefixer')(), require('cssnano')()],
      },
    },
  ],
};
