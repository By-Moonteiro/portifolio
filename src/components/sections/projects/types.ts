type ProjectType = "fullstack" | "backend" | "other";

export interface Project {
  name: string;
  type: ProjectType;
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
