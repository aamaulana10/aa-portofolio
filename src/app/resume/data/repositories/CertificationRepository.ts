import { Certification } from '../../domain/models/Certification';

export class CertificationRepository {
  private certifications: Certification[] = [
    {
      id: '1',
      title: 'Golang Programming from Beginner to Expert',
      issuer: 'Udemy',
      issueDate: 'March 2024',
      credentialLink: 'https://www.udemy.com/certificate/UC-c494fd2e-be2e-40d9-8f81-ef48bd55d008/',
      description: 'Comprehensive Golang development course covering Golang basic, MySql, Goroutine, Embed, Restful API, database, Context, Concurrency, and more'
    },
    {
      id: '2',
      title: 'Front-End Web Developer Expert',
      issuer: 'Dicoding Indonesia',
      issueDate: 'Jan 2025',
      credentialLink: 'https://www.dicoding.com/certificates/53XEDJ3WVPRN',
      description: 'Advanced Frontend development course covering PWA, End to end Testing, Unit Testing, Indexed DB, Web Performance, and more'
    },
    {
      id: '3',
      title: 'Android Developer Expert',
      issuer: 'Dicoding Indonesia',
      issueDate: 'January 2019',
      credentialLink: 'https://www.dicoding.com/certificates/98XW6WMRLXM3',
      description: 'Advanced Android development certification covering architecture patterns, performance optimization, and best practices'
    }
  ];

  getAll(): Certification[] {
    return this.certifications;
  }

  getById(id: string): Certification | undefined {
    return this.certifications.find(certification => certification.id === id);
  }
} 