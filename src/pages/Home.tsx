import ThemeToggle from "../components/Common/ThemeToggle";
import StarBackground from "../components/Common/StarBackground";
import Navbar from "../components/Common/Navbar";
import HeroSection from "../components/Sections/HeroSection";
import AboutSection from "../components/Sections/AboutSection";
import SkillsSection from "../components/Sections/SkillsSection";
import ProjectsSection from "../components/Sections/ProjectsSection";
import ContactsSection from "../components/Sections/ContactsSection";
import Footer from "../components/Common/Footer";
// import PlanetsBackground from "../components/Common/PlanetsBackground";
// import { useTheme } from "../hooks/useTheme";

const Home = () => {
  // const { isDarkMode } = useTheme();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      {/* {isDarkMode && <PlanetsBackground />} */}
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
