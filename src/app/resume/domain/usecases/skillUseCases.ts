import { Skill, SkillCategory, skills } from '../models/Skill';

export const getAllSkills = (): Skill[] => skills;

export const getSkillsByCategory = (category: SkillCategory): Skill[] =>
  skills.filter(skill => skill.category === category);

export const getGroupedSkills = (): Map<SkillCategory, Skill[]> => {
  const groupedSkills = new Map<SkillCategory, Skill[]>();

  Object.values(SkillCategory).forEach(category => {
    groupedSkills.set(category, getSkillsByCategory(category));
  });

  return groupedSkills;
}; 