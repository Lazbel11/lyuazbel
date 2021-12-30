import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';

export default function Resume({ data }) {
  const { content } = data;
  const [resume] = content.edges.map(({ node }) => node.pageText.childMarkdownRemark);

  return (
    <Layout seo={{ title: 'Resume' }}>
      <article
        id='resume'
        dangerouslySetInnerHTML={{
          __html: resume.html,
        }}
      ></article>
    </Layout>
  );
}

export const query = graphql`
  query {
    content: allContentfulEducation {
      edges {
        node {
          pageText {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
