import { ExternalLink, Github } from "lucide-react";
import { Badge } from "../ui/badge";

interface ProjectCardProps {
  project: {
    id: number;
    tags: string[];
    title: string;
    description: string;
    code: string;
    demoUrl: string;
    image: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      key={project.id}
      className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                <ExternalLink size={20} />
              </a>
            )}
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
