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

  const Publication = ({ pub }) => {
    return (
      <li className='mb-3'>
        <div className='mb-1'>
          <a href={pub.link} about='_blank' rel='noreferrer noopener' className='title me-1'>
            <h3 className='d-inline'>{pub.title}</h3>
          </a>
          <span className='publication text-nowrap'>{pub.publicationName}</span>
        </div>
        <p className='authors'>
          {pub.authors.join(', ')}
          <span className='date'>&nbsp;({new Date(pub.date).getFullYear()})</span>
        </p>

        {pub.quote ? (
          <blockquote
            className='mx-0 px-3 py-0'
            dangerouslySetInnerHTML={{
              __html: pub.quote.childMarkdownRemark.html,
            }}
          />
        ) : (
          <span />
        )}
      </li>
    );
  };

  return (
    <Layout seo={{ title: 'Publications' }}>
      <h1>Publications</h1>
      <article id='publications' className='content-max-width'>
        {sections.map((id) => {
          if (id === massMediaKey && publicationsByCategory[massMediaKey].length < 3) {
            return <span></span>;
          }
          return (
            <section key={id} id={`section-${id}`}>
              <h2>{mapPublicationCategoryIdToTitle[id]}</h2>
              <ul className='list-unstyled ms-0 mb-5'>
                {publicationsByCategory[id].map((pub, i) => (
                  <Publication key={i} pub={pub} />
                ))}
              </ul>
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
          quote {
            childMarkdownRemark {
              html
            }
          }
          date(formatString: "YYYY-MM-DD")
          link
        }
      }
    }
  }
`;
