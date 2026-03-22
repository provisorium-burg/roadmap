export interface Task {
  title: string;
  description: string;
  category: string;
  startDate: string;
  endDate: string;
  status: "planned" | "in-progress" | "completed";
  team?: string[];
  deliverables?: string[];
  dependencies?: string[];
}

export interface Milestone {
  title: string;
  date: string;
  description: string;
}

export interface Phase {
  name: string;
  quarter: string;
  year?: number | string | null; // Erlaubt das Weglassen oder Text
  tasks: Task[];
  milestones: Milestone[];
}

export interface RoadmapData {
  projectTitle: string;
  duration: string;
  phases: Phase[];
}
