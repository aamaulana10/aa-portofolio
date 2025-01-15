import { ProjectRepository } from '../../data/repositories/ProjectRepository';
import { Project } from '../models/Project';

const repository = new ProjectRepository();

export const getAllProjects = (): Project[] => repository.getAll();

export const getProjectById = (id: string): Project | undefined =>
  repository.getById(id); 