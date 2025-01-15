import { Certification, certifications } from '../models/Certification';

export const getAllCertifications = (): Certification[] => certifications;

export const getCertificationById = (id: string): Certification | undefined =>
  certifications.find(cert => cert.id === id); 