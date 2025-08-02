export type ProjectType = {
  id: number;
  name: string;
  image: string;
  type: 'web' | 'mobile' | 'design' | 'api' | 'backend';
  project_technologies: string[] | null;
  description: string | null;
  deploy: string | null;
  github: string | null;
};
