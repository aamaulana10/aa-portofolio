import { Skill, SkillCategory } from '../../domain/models/Skill';

export class SkillRepository {
  private skills: Skill[] = [
    { id: '1', name: 'React Native', category: SkillCategory.MOBILE },
    { id: '2', name: 'Flutter', category: SkillCategory.MOBILE },
    { id: '3', name: 'Android Kotlin', category: SkillCategory.MOBILE },
    { id: '4', name: 'iOS Swift', category: SkillCategory.MOBILE },
    { id: '5', name: 'Next.js', category: SkillCategory.FRONTEND },
    { id: '6', name: 'React', category: SkillCategory.FRONTEND },
    { id: '7', name: 'Vue JS', category: SkillCategory.FRONTEND },
    { id: '8', name: 'Node JS', category: SkillCategory.BACKEND },
    { id: '9', name: 'Laravel', category: SkillCategory.BACKEND },
    { id: '10', name: 'Golang', category: SkillCategory.BACKEND },
    { id: '11', name: 'MySQL', category: SkillCategory.DATABASE },
    { id: '12', name: 'Postgres', category: SkillCategory.DATABASE },
    { id: '13', name: 'Firebase', category: SkillCategory.CLOUD },
    { id: '14', name: 'GCP Cloud Function', category: SkillCategory.CLOUD },
    { id: '15', name: 'AWS Dynamo DB, Cognito', category: SkillCategory.CLOUD },
    { id: '16', name: 'CI CD', category: SkillCategory.DEVOPS },
    { id: '17', name: 'E2E Testing', category: SkillCategory.DEVOPS }
  ];

  getAll(): Skill[] {
    return this.skills;
  }

  getByCategory(category: SkillCategory): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }
} 