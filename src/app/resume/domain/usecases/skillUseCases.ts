import { SkillRepository } from '../../data/repositories/SkillRepository';
import { Skill, SkillCategory } from '../models/Skill';

const repository = new SkillRepository();

export const getAllSkills = (): Skill[] => repository.getAll();

export const getSkillsByCategory = (category: SkillCategory): Skill[] =>
  repository.getByCategory(category);

export const getGroupedSkills = (): Map<SkillCategory, Skill[]> => {
  const groupedSkills = new Map<SkillCategory, Skill[]>();

  Object.values(SkillCategory).forEach(category => {
    groupedSkills.set(category, getSkillsByCategory(category));
  });

  return groupedSkills;
}; 