export type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string | null;
  tags: string[];
  liveUrl: string | null;
};