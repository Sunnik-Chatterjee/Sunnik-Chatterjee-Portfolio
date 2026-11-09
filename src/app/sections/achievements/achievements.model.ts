export interface Achievement {
  id: string;
  number: string;
  title: string;
  issuer: string;
  description: string;

  type: 'certification' | 'recognition' | 'milestone';

  date?: string;
  credentialUrl?: string;
  image?: string;
}