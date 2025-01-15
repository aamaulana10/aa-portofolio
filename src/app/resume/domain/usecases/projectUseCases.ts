import { Project, projects } from '../models/Project';

export const getAllProjects = (): Project[] => projects;

export const getProjectById = (id: string): Project | undefined =>
  projects.find(project => project.id === id); 