import ThemeToggle from "../components/Common/ThemeToggle";
import StarBackground from "../components/Common/StarBackground";
import Navbar from "../components/Common/Navbar";
import HeroSection from "../components/Sections/HeroSection";
import AboutSection from "../components/Sections/AboutSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </div>
  );
};

export default Home;
