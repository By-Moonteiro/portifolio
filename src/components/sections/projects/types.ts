export interface Project {
  name: string;
  description: string;
  status: "WIP" | "DONE";
  year: number;
  stack: string[];
  repo: string;
  deploy?: string;
  slug?: string;
  details: {
    description: string;
    problem?: string;
    solution?: string;
    impact?: string;
  };
}