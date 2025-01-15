export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialLink: string;
  description?: string;
}

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Flutter Development Bootcamp with Dart',
    issuer: 'Udemy',
    issueDate: 'March 2024',
    credentialLink: 'https://www.udemy.com/certificate/UC-c494fd2e-be2e-40d9-8f81-ef48bd55d008/',
    description: 'Comprehensive Flutter development course covering state management, animations, and advanced UI patterns'
  },
  {
    id: '2',
    title: 'Android Developer Expert',
    issuer: 'Dicoding Indonesia',
    issueDate: 'January 2019',
    credentialLink: '#',
    description: 'Advanced Android development certification covering architecture patterns, performance optimization, and best practices'
  }
]; 