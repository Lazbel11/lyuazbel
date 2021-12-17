import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';

export default function Index({ data }) {
  const { site } = data;
  return (
    <Layout siteData={site.siteMetadata}>
      <section id='about'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum est facilis distinctio
        officia possimus! Velit quae quidem repellendus iste veniam voluptatum porro itaque incidunt
        totam, non corrupti aliquid voluptates quaerat tempora, excepturi dolore vel, blanditiis
        quasi placeat asperiores! Facere veritatis distinctio atque tempora soluta doloribus. Quae
        culpa perspiciatis nihil possimus fuga qui ducimus consequuntur quaerat odit repellat. Sunt
        expedita iusto libero exercitationem? Neque a nemo voluptates harum tempore debitis
        quibusdam laboriosam fugiat exercitationem? Possimus quisquam dolorum sequi ad nemo quos
        deleniti incidunt, laborum, aliquam quis natus fugit unde totam expedita quas quidem
        aperiam, temporibus fuga dicta corrupti recusandae quibusdam vero atque mollitia! Soluta aut
        modi inventore voluptatibus dignissimos reiciendis aspernatur dolorum expedita aperiam
        facere. Voluptates possimus quaerat rerum labore!
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        license
        navigation
        links {
          name
          href
        }
      }
    }
  }
`;
