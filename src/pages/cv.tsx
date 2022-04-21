import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';

export default function Resume({ data }) {
  const { about, education } = data;
  const resume = education.pageText.childMarkdownRemark;

  return (
    <Layout seo={{ title: 'CV' }}>
      <article id='resume'>
        <h1>{about.tagline}</h1>
        <div
          className='md-style'
          dangerouslySetInnerHTML={{
            __html: resume.html,
          }}
        />
      </article>
    </Layout>
  );
}

export const query = graphql`
  query {
    about: contentfulAbout {
      tagline
    }
    education: contentfulEducation {
      pageText {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
