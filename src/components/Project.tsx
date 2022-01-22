import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Button, Collapse } from 'reactstrap';
import { formatProjectTimeframe } from '../helpers';

export default function Project({ project }) {
  const [open, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <article className='container-fluid mb-5 px-0'>
      <div className='row gx-0'>
        <div className='col-12 mb-3'>
          <Button onClick={toggle} className='button p-0'>
            <GatsbyImage
              objectFit='cover'
              image={getImage(project.pictures[0])!}
              className='picture'
              alt='Project Image'
            />
          </Button>
        </div>
        <div className='col'>
          <div className='mb-0'>
            <h2 className='d-inline-block mb-2 me-2'>
              {!project.link ? (
                project.title
              ) : (
                <a href={project.link} about='_blank' rel='noreferrer noopener'>
                  {project.title}
                </a>
              )}{' '}
            </h2>
            <span className='text-nowrap'>{formatProjectTimeframe(project.startDate, project.endDate)}</span>
          </div>
          <Collapse isOpen={open}>
            <p className='institution mb-2'>{project.institution}</p>
            <div
              className='md-style'
              dangerouslySetInnerHTML={{
                __html: project.description.childMarkdownRemark.html,
              }}
            />
          </Collapse>
        </div>
      </div>
    </article>
  );
}
