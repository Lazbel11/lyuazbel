import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';
import Project from '../components/Project';

export default function Projects({ data }) {
  const { allContentfulProject } = data;
  const projects = allContentfulProject.edges.map(({ node }) => node);

  return (
    <Layout seo={{ title: 'Projects' }}>
      <section id='projects' className='content-max-width'>
        <h1>Projects</h1>
        {projects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
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
