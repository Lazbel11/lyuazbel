import { graphql } from 'gatsby';
import * as React from 'react';
import { formatProjectTimeframe } from '../helpers';
import Layout from '../components/Layout';

import * as styles from '../styles/projects.module.scss';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Projects({ data }) {
  const { allContentfulProject } = data;
  const projects = allContentfulProject.edges.map(({ node }) => node);

  return (
    <Layout seo={{ title: 'Projects' }}>
      <section id='projects'>
        {projects.map((project, i) => (
          <article key={i} className='container mb-5'>
            <div className='row'>
              <div className='col-4'>
                <GatsbyImage
                  objectFit='cover'
                  image={getImage(project.pictures[0])!}
                  className={styles.picture}
                  alt='Project Image'
                />
              </div>
              <div className='col'>
                <h4>
                  <a href={project.link} about='_blank' rel='noreferrer noopener'>
                    {project.title}
                  </a>{' '}
                  <small className='text-muted font-weight-normal text-nowrap' style={{ fontSize: '70%' }}>
                    {formatProjectTimeframe(project.startDate, project.endDate)}
                  </small>
                </h4>
                <h5 className={styles.institution}>
                  <em>{project.institution}</em>
                </h5>
                <div
                  className={styles.description}
                  dangerouslySetInnerHTML={{
                    __html: project.description.childMarkdownRemark.html,
                  }}
                />
              </div>
            </div>
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
