import ProjectTemplate from "../../../components/ProjectTemplate";
import { projects, Project } from '@/Types/project'; // Correct import of Project type


export default function KintecGlobalPage() {
  const project = projects.find((p) => p.slug === "sigmar-recruitment");
  if (!project) throw new Error("Project not found");

  const index = projects.findIndex((p) => p.slug === "sigmar-recruitment");
  const nextProject = projects[(index + 1) % projects.length];

  return <ProjectTemplate project={project} nextProject={nextProject} />;
}
