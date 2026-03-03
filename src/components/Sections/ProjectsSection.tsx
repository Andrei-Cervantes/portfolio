import { ArrowRight } from "lucide-react";
import { projectsSection } from "../../constants/sectionParagraphs";
import ProjectCard from "../Common/ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          neque nostrum recusandae dolores deleniti quas quis, dolorum
          asperiores modi fuga?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsSection.projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Andrei-Cervantes"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
