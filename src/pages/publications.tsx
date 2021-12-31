import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';
import { mapPublicationCategoryIdToTitle, publicationCategoryIdMap } from '../config';
import { reducePublicationsByCategory, simpleFormatString } from '../helpers';

export type Publication = {
  title: string;
  publicationName: string;
  authors: string[];
  category: string;
  date: string;
  link: string;
};

export default function Publications({ data }) {
  const { edges } = data.allContentfulPublication;
  const publicationsByCategory = reducePublicationsByCategory(edges.map(({ node }) => node));
  const sections = Object.keys(publicationsByCategory).sort();
  const { massMedia: massMediaKey } = publicationCategoryIdMap;

  return (
    <Layout seo={{ title: 'Publications' }}>
      <article id='publications'>
        {sections.map((id) => {
          if (id === massMediaKey && publicationsByCategory[massMediaKey].length < 3) {
            return <div></div>;
          }
          return (
            <section key={id} id={`section-${id}`}>
              <h3>{mapPublicationCategoryIdToTitle[id]}</h3>
              {publicationsByCategory[id].map((pub, i) => (
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
          );
        })}
      </article>
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
          category
          date(formatString: "YYYY-MM-DD")
          link
        }
      }
    }
  }
`;
