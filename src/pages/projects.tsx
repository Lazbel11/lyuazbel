import { graphql } from 'gatsby';
import * as React from 'react';
import { formatProjectTimeframe } from '../helpers';
import Layout from '../components/Layout';

import * as styles from '../styles/projects.module.scss';

export default function Projects({ data }) {
  const { allContentfulProject } = data;
  const projects = allContentfulProject.edges.map(({ node }) => node);

  return (
    <Layout seo={{ title: 'Projects' }}>
      <section id='projects'>
        {projects.map((project, i) => (
          <article key={i}>
            <p>
              {formatProjectTimeframe(project.startDate, project.endDate)}{' '}
              <a href={project.link} about='_blank' rel='noreferrer noopener'>
                {project.title}
              </a>{' '}
            </p>
            <p className={styles.institution}>{project.institution}</p>
            <p
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html: project.description.childMarkdownRemark.html,
              }}
            />
          </article>
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
