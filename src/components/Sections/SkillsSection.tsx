// import { useState } from "react";
// import { type Skill } from "../../types/skillTypes";
// import { cn } from "../../lib/utils";

import { IconCloud } from "../ui/IconCloud";

// const skills: Skill[] = [
//   // 🧠 Frontend
//   { name: "JavaScript", level: 90, category: "frontend" },
//   { name: "TypeScript", level: 85, category: "frontend" },
//   { name: "React.js", level: 88, category: "frontend" },
//   { name: "Next.js", level: 82, category: "frontend" },
//   { name: "TailwindCSS", level: 87, category: "frontend" },
//   { name: "shadcn/ui", level: 75, category: "frontend" },
//   { name: "Bootstrap", level: 70, category: "frontend" },
//   { name: "Framer Motion", level: 72, category: "frontend" },
//   { name: "Zustand", level: 78, category: "frontend" },
//   { name: "TanStack Query", level: 80, category: "frontend" },

//   // ⚙️ Backend
//   { name: "Node.js", level: 85, category: "backend" },
//   { name: "Express.js", level: 82, category: "backend" },
//   { name: "MongoDB", level: 78, category: "backend" },
//   { name: "Postman", level: 80, category: "backend" },

//   // 🧰 Tools & Workflow
//   { name: "Git & GitHub", level: 88, category: "tools" },
//   { name: "Figma", level: 72, category: "design" },
// ];

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
  // const [activeCategory, setActiveCategory] = useState("all");
  // const categories = ["all", ...new Set(skills.map((skill) => skill.category))];
  // const filteredSkills = skills.filter(
  //   (skill: Skill) =>
  //     activeCategory === "all" || skill.category === activeCategory
  // );

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
            <IconCloud images={images} />
          </div>
        </div>

        {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill: Skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />

                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default SkillsSection;
