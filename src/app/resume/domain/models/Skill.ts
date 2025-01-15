export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
}

export enum SkillCategory {
  MOBILE = 'Mobile Development',
  FRONTEND = 'Frontend Development',
  BACKEND = 'Backend Development',
  DATABASE = 'Database',
  CLOUD = 'Cloud Services',
  DEVOPS = 'DevOps'
}