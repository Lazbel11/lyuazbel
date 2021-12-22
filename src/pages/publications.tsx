import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';

export default function Publications({ data }) {
  const { allContentfulPublication } = data;
  const publications = allContentfulPublication.edges.map(({ node }) => node);

  return (
    <Layout seo={{ title: 'Publications' }}>
      <section id='about'>
        {publications.map((pub, i) => (
          <article key={i}>
            <p>
              {new Date(pub.date).getFullYear()} {pub.authors.join(', ')}{' '}
              <a href={pub.link} about='_blank' rel='noreferrer noopener'>
                {pub.title}
              </a>{' '}
              <em>{pub.publicationName}</em>
            </p>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    allContentfulPublication(sort: { fields: date, order: DESC }) {
      edges {
        node {
          title
          publicationName
          authors
          date(formatString: "YYYY-MM-DD")
          link
        }
      }
    }
  }
`;
