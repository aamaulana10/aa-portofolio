import { CertificationRepository } from '../../data/repositories/CertificationRepository';
import { Certification } from '../models/Certification';

const repository = new CertificationRepository();
export const getAllCertifications = (): Certification[] => repository.getAll();

export const getCertificationById = (id: string): Certification | undefined =>
  repository.getById(id);