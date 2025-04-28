export enum ProjectCategory {
  MOBILE = 'Mobile',
  FRONTEND = 'Frontend',
  BACKEND = 'Backend'
}

export interface Project {
  id: string;
  image?: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  category: ProjectCategory;
}