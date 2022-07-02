import { ProjectItemBase } from "../models/project-item.model";

export const webProjects: ProjectItemBase[] = [
  {
    imageSrc: '/images/computer-mockup.png',
    projectTitle: 'Shiny Hunt Counter',
    projectDescription: 'Para ajudar quem caça pokemon shiny com soft-resest',
    projectTechnologies: 'Angular',
  }
];

export const mobileProjects: ProjectItemBase[] = [
  {
    imageSrc: '/images/cellphone-mockup.png',
    projectTitle: 'SARE',
    projectDescription: 'Aprendizagem por Repetição Espaçada',
    projectTechnologies: 'Flutter',
  }
];

export const desktopProjects: ProjectItemBase[] = [
  {
    imageSrc: '/images/desktop-mockup.png',
    projectTitle: 'MMORPG ENGINE',
    projectDescription: 'Engine open source',
    projectTechnologies: 'C#, .net',
  }
];

export default [webProjects, mobileProjects, desktopProjects];