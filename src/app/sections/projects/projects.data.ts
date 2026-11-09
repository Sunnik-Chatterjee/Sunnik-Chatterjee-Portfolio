import { Project } from './project.model';

export const PROJECTS: Project[] = [
  {
    id: 'bro-fin',
    number: '001',
    title: 'Bro-Fin',
    category: 'FINTECH',
    tagline: 'A personal approach to managing money.',
    description:
      'A personal finance management platform for organising expenses, tracking transactions and understanding financial activity.',
    technologies: ['Angular', 'Node.js', 'Express', 'MongoDB'],
    featured: true,
  },
  {
    id: 'kavach',
    number: '002',
    title: 'Kavach',
    category: 'PREDICTIVE MAINTENANCE',
    tagline: 'Turning machine signals into meaningful alerts.',
    description:
      'A predictive maintenance backend that processes machine predictions, evaluates fault conditions and delivers real-time alerts.',
    technologies: [
      'FastAPI',
      'Python',
      'PostgreSQL',
      'SQLAlchemy',
      'WebSockets',
    ],
    featured: true,
  },
  {
    id: 'nexterday',
    number: '003',
    title: 'Nexterday',
    category: 'EVENT MANAGEMENT',
    tagline: 'Bringing events and people together.',
    description:
      'An event management application focused on organising events and simplifying event-related operations.',
    technologies: [],
  },
  {
    id: 'doctor-appointment',
    number: '004',
    title: 'Doctor Appointment System',
    category: 'HEALTHCARE',
    tagline: 'Making appointment management simpler.',
    description:
      'An application focused on managing doctor appointments and simplifying the patient appointment process.',
    technologies: [],
  },
  {
    id: 'dealspy',
    number: '005',
    title: 'DealSpy',
    category: 'SMART TRACKING',
    tagline: 'Keeping an eye on deals worth finding.',
    description:
      'A smart deal tracking application designed to help users follow product deals and keep track of attractive offers.',
    technologies: [],
  },
];