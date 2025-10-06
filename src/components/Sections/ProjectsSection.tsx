import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project One",
    description:
      "Description for project one. This project is awesome. This project is so fun to do.",
    image: "https://placehold.co/600x400",
    tags: ["React", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "Description for project two. This project is awesome. This project is so fun to do.",
    image: "https://placehold.co/600x400",
    tags: ["React", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "Description for project three. This project is awesome. This project is so fun to do.",
    image: "https://placehold.co/600x400",
    tags: ["React", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Project Four",
    description:
      "Description for project four. This project is awesome. This project is so fun to do.",
    image: "https://placehold.co/600x400",
    tags: ["React", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Project Five",
    description:
      "Description for project five. This project is awesome. This project is so fun to do.",
    image: "https://placehold.co/600x400",
    tags: ["React", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Project Six",
    description:
      "Description for project six. This project is awesome. This project is so fun to do.",
    image: "https://placehold.co/600x400",
    tags: ["React", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          neque nostrum recusandae dolores deleniti quas quis, dolorum
          asperiores modi fuga?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
