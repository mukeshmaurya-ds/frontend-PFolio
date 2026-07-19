export type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;   // optional project image
  link?: string;    // optional live demo link
  github?: string;  // optional GitHub repo link
};
