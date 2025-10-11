import { IconCloud } from "../ui/IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "vercel",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "figma",
];

const SkillsSection = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">Skills</span> and{" "}
          <span className="text-primary">Experience</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center mb-12">
          <div className="space-y-4">
            <p>
              A frontend developer focused on building clean, efficient, and
              maintainable web applications using React, Next.js, and Electron.
              Familiar with feature-based architecture, Zustand for state
              management, and Shadcn/UI for building consistent and reusable
              interfaces. Experienced working in Agile (Scrum) teams and
              collaborating with different disciplines to develop reliable and
              user-friendly frontends.
            </p>
            <p>
              Enjoys improving code structure, exploring frontend architecture,
              and finding ways to make development workflows more efficient.
              Constantly learning and refining skills to build applications that
              balance performance, scalability, and maintainability.
            </p>
          </div>
          <div className="relative flex size-full items-center justify-center overflow-hidden">
            <div className="relative w-[400px] h-[400px]">
              {/* Background with animation */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(0,128,255,0.4)_0%,rgba(0,128,255,0)_70%)] animate-spread"></div>

              {/* IconCloud */}
              <IconCloud images={images} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
