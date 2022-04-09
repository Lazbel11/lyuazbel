import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Collapse } from 'reactstrap';
import { formatProjectDate } from '../helpers';
import classNames from 'classnames';

export default function Project({ project }) {
  const [open, setOpen] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  // todo: colorise pic on hover https://stackoverflow.com/questions/29458666/emulate-photoshops-color-overlay-using-css-filters

  return (
    <article className='project container-fluid mb-3 px-0'>
      <div className='row gx-0'>
        <div className='col-12 mb-3' onMouseOver={(e) => setIsHovered(true)} onMouseOut={(e) => setIsHovered(false)}>
          <button onClick={toggle} className='button p-0'>
            <GatsbyImage
              objectFit='cover'
              image={getImage(project.pictures[0])!}
              className='picture'
              alt='Project Image'
            />
          </button>
        </div>
        <div className='col'>
          <div className='mb-2'>
            <h2 className={classNames('d-inline', { active: isHovered })}>
              {!project.link ? (
                project.title
              ) : (
                <a href={project.link} about='_blank' rel='noreferrer noopener'>
                  {project.title}
                </a>
              )}
            </h2>
            <span className='text-nowrap ms-2'>{formatProjectDate(project.endDate)}</span>
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
