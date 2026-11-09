import { Achievement } from './achievements.model';

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ai-900',
    number: '001',
    title: 'Azure AI Fundamentals',
    issuer: 'Microsoft',
    description:
      'Microsoft AI-900 certification covering foundational artificial intelligence and Azure AI concepts. Score: 877.',
    type: 'certification',
  },
  {
    id: 'sap-backend',
    number: '002',
    title: 'Backend Developer',
    issuer: 'SAP',
    description:
      'Earned the SAP Certified Backend Developer credential.',
    type: 'certification',
  },
  {
    id: 'hackerrank-cpp',
    number: '003',
    title: '5-Star C++',
    issuer: 'HackerRank',
    description:
      'Achieved a five-star rating in C++ programming on HackerRank.',
    type: 'recognition',
  },
  {
    id: 'rh124',
    number: '004',
    title: 'RH124 Course',
    issuer: 'Red Hat',
    description:
      'Completed the Red Hat System Administration I (RH124) course.',
    type: 'milestone',
  },
];