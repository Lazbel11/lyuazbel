import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';
import typography from '../config/typography';
import { GoogleFont } from 'react-typography';

export type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
};

// todo: best practices for seo https://ahrefs.com/blog/seo-meta-tags/

const SEO = ({ title, description, image }: SEOProps) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const { defaultTitle, titleTemplate, defaultDescription, siteUrl, defaultImage } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={title && titleTemplate}>
      <meta name='description' content={seo.description} />
      {seo.image && <meta name='image' content={seo.image} />}

      {seo.url && <meta property='og:url' content={seo.url} />}
      {seo.title && <meta property='og:title' content={seo.title} />}
      {seo.description && <meta property='og:description' content={seo.description} />}
      {seo.image && <meta property='og:image' content={seo.image} />}

      <GoogleFont typography={typography} />
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
        defaultDescription: description
        siteUrl
        defaultImage: image
      }
    }
  }
`;
