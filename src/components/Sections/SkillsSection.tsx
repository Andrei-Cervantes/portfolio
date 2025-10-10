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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis deleniti sequi animi cumque dicta ipsa ullam
              repellendus, voluptate consequatur, molestiae non doloremque quia
              esse enim eum debitis voluptatem sapiente possimus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae libero dolorum aperiam nam, voluptate dolores porro
              totam nihil sunt esse!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              quam nihil accusamus quaerat obcaecati deserunt magnam provident
              doloremque, autem dolorem cumque voluptatibus nemo, unde nostrum
              corrupti similique ea. Ipsum, ratione.
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
