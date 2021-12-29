import { graphql } from 'gatsby';
import { find } from 'lodash';
import * as React from 'react';
import Layout from '../components/Layout';
import { embedHtmlAnchor } from '../helpers';

export default function Privacy({ data }) {
  const { content, site } = data;
  const [privacy] = content.edges.map(({ node }) => node.privacyPolicy.childMarkdownRemark);
  const email = find(site.siteMetadata.links, (link) => link.name.toLowerCase() === 'email');
  const privacyHtml = privacy.html
    .replace(/\{email\}/gm, embedHtmlAnchor(email.href))
    .replace(/\{siteUrl\}/gm, embedHtmlAnchor(site.siteMetadata.url));

  return (
    <Layout seo={{ title: 'Privacy Policy' }}>
      <article
        id='privacy'
        dangerouslySetInnerHTML={{
          __html: privacyHtml,
        }}
      ></article>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        url
        links {
          name
          href
        }
      }
    }
    content: allContentfulImprintPrivacyPolicy {
      edges {
        node {
          privacyPolicy {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
