export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];

  image?: string;
  githubUrl?: string;
  liveUrl?: string;

  featured?: boolean;
}