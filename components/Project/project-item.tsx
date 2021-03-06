import { ProjectItemBase } from '../../shared/models/project-item.model';
import { ProjectImage, ProjectWrapper } from './project-item-style';

function ProjectItem(item: ProjectItemBase) {
  return (
    <ProjectWrapper reversed={item.reversed}>
      <ProjectImage src={item.imageSrc} />
      <article className='ml-8 mr-8 font-display text-dark'>
        <h1 className='title text-xl md:text-3xl font-semibold '>
          { item.projectTitle }
        </h1>
        <p className='description'>
        { item.projectDescription }
        </p>
        <p className='technologies'>
        { item.projectTechnologies }
        </p>
        <a href="#">
          <img src="/images/github-logo.svg" className='icon' width='32' height='32' alt="Link para o Github do Projeto" />
        </a>
      </article>
    </ProjectWrapper>
  );
}

export default ProjectItem