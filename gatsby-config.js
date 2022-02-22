require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const primary = '#9ce3f4';
const background = '#18181b';
const author = 'Lyu Azbel';
const tagline = 'Public Health Research Scientist';
const siteUrl = 'https://www.lyuazbel.com';
const noindex = [
  '/imprint/',
  '/imprint',
  '/privacy-policy/',
  '/privacy-policy',
  '/404',
  '/404/',
  '/offline-plugin-app-shell-fallback/',
];
const lang = 'en';

module.exports = {
  siteMetadata: {
    title: `${author} · ${tagline}`,
    shortTitle: author,
    titleTemplate: `%s · ${author} · ${tagline}`,
    author,
    description:
      'Dr. Lyu Azbel’s portfolio featuring research projects at the intersection of drug use, marginalized subcultures, and infectious diseases.',
    siteUrl,
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
    'gatsby-plugin-sass',
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
          backgroundColor: primary,
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
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-offline`, // must stay after manifest
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: '*', disallow: noindex }],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        excludes: noindex,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map((page) => {
            return { ...page };
          });
        },
        serialize: ({ path }) => {
          return {
            url: path,
            lastmod: Date.now(),
          };
        },
      },
    },
  ],
};
