import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';
import Project from '../components/Project';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export default function Projects({ data }) {
  const { allContentfulProject } = data;
  const projects = allContentfulProject.edges.map(({ node }) => node);

  return (
    <Layout seo={{ title: 'Projects' }}>
      <section id='projects'>
        <h1>Projects</h1>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 720: 2 }}>
          <Masonry gutter='1rem'>
            {projects.map((project, i) => (
              <div className='grid-item'>
                <Project key={i} project={project} />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    allContentfulProject(sort: { fields: endDate, order: DESC }) {
      edges {
        node {
          title
          institution
          startDate
          endDate
          link
          pictures {
            gatsbyImageData(layout: CONSTRAINED)
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
