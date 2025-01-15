import { Project } from '../../domain/models/Project';

export class ProjectRepository {
  private projects: Project[] = [
    {
      id: '1',
      title: 'FIT HUB - Android',
      description: 'Largest gym App in Indonesia who wants to make a better platform and be a fully healthy tech company.',
      link: 'https://play.google.com/store/apps/details?id=com.thehub.apps&hl=en',
      linkText: 'View on Play Store'
    },
    {
      id: '2',
      title: 'FIT HUB - iOS',
      description: 'Largest gym App in Indonesia who wants to make a better platform and be a fully healthy tech company.',
      link: 'https://apps.apple.com/id/app/fit-hub/id123456789',
      linkText: 'View on App Store'
    }
    // Add more projects as needed
  ];

  getAll(): Project[] {
    return this.projects;
  }

  getById(id: string): Project | undefined {
    return this.projects.find(project => project.id === id);
  }
} 