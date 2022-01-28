require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const primary = '#37f6ff80';
const background = '#18181b';
const author = 'Lyu Azbel';
const tagline = 'Public Health Research Scientist';
const lang = 'en';

module.exports = {
  siteMetadata: {
    title: `${author} · ${tagline}`,
    shortTitle: author,
    titleTemplate: `%s · ${author} · ${tagline}`,
    author,
    description: '', // has to be for each page. ex for vincent: Vincent Reynaud's portfolio featuring projects in Frontend Web Development, Visual Design and Electronic Sound Production
    siteUrl: 'https://www.lyuazbel.com',
    navigation: ['cv', 'publications', 'projects'],
    links: [
      { name: 'Email', href: ' lyu.azbel@yale.edu' },
      { name: 'LinkedIn', href: ' https://www.linkedin.com/in/lyu-azbel-phd-b45b664a' },
      { name: 'ResearchGate', href: ' https://www.researchgate.net/profile/Lyu-Azbel' },
    ],
    image: '/favicon.png', // image placed in the static folder
    location: { region: 'DE-BE', placename: 'Berlin' },
    country: 'de',
    lang,
    license: '',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/config/typography`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: author,
        short_name: author,
        start_url: '/',
        background_color: `${background}`,
        theme_color: `${primary}`,
        display: 'standalone',
        icon: `src/images/favicon.png`,
        lang,
      },
    },
    'gatsby-transformer-remark',

    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          transformOptions: { fit: 'cover', cropFocus: 'attention' },
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
