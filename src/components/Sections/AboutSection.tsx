import { aboutSection } from "../../constants/sectionParagraphs";
import AboutCard from "../Common/AboutCard";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              {aboutSection.summaryTitle}
            </h3>

            {aboutSection.summaryParagraph.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground">
                {paragraph}
              </p>
            ))}

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button w-full md:w-auto">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1mW6Ql-e_6SJ5g2tbp9KeRk36oaKYCJOQ/view?usp=drive_link"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 w-full md:w-auto"
              >
                {" "}
                Download Resume
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 gap-6">
            {aboutSection.aboutSkills.map((skill, index) => (
              <AboutCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
