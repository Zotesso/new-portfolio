import { ProjectImage, ProjectWrapper } from './project-item-style';

interface ProjectItemBase {
  projectTitle: string;
  projectDescription: string;
  imageSrc: string;
  projectTechnologies: string;
  reversed?: boolean;
}

function ProjectItem(item: ProjectItemBase) {
  return (
    <ProjectWrapper>
      <ProjectImage src={item.imageSrc} width='250' height='250' />
      <article>
        <h1 className='title'>
          { item.projectTitle }
        </h1>
        <p className='description'>
        { item.projectDescription }
        </p>
        <p className='technologies'>
        { item.projectTechnologies }
        </p>
      </article>
    </ProjectWrapper>
  );
}

export default ProjectItem