import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

export type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  robots?: string;
  lang?: string;
  location?: { region?: string; placename?: string };
  country?: string;
};

const SEO = ({ title, description, lang, location = {}, country, image, robots }: SEOProps) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    author,
    defaultLocation,
    defaultLang = 'en',
    defaultCountry = 'de',
    defaultImage,
  } = site.siteMetadata;
  const { region, placename } = location;
  const { defaultRegion = 'DE-BE', defaultPlacename = 'Berlin' } = defaultLocation;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,

    url: `${siteUrl}${pathname}`,
    region: region || defaultRegion,
    lang: lang || defaultLang,
    placename: placename || defaultPlacename,
    country: country || defaultCountry,
    author,
    robots,
  };

  return (
    <Helmet titleTemplate={title && titleTemplate}>
      <html lang={seo.lang} amp />
      <title itemProp='name' lang={seo.lang}>
        {seo.title}
      </title>
      <meta name='description' content={seo.description} />
      {seo.image ? <meta name='image' content={seo.image} /> : null}
      <meta http-equiv='content-language' content={`${seo.lang}-${seo.country}`} />

      {seo.url ? <meta property='og:url' content={seo.url} /> : null}
      {seo.title ? <meta property='og:title' content={seo.title} /> : null}
      {seo.description ? <meta property='og:description' content={seo.description} /> : null}
      {seo.image ? <meta property='og:image' content={seo.image} /> : null}
      <meta name='geo.region' content={seo.region} />
      <meta name='geo.placename' content={seo.placename} />
      <meta name='author' content={seo.author} />
      {robots ? <meta name='robots' content={seo.robots} /> : null}
    </Helmet>
  );
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        siteUrl
        author
        defaultDescription: description
        defaultImage: image
        defaultCountry: country
        defaultLang: lang
        defaultLocation: location {
          defaultRegion: region
          defaultPlacename: placename
        }
      }
    }
  }
`;
