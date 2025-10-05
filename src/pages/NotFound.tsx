import StarBackground from "../components/Common/StarBackground";
import ThemeToggle from "../components/Common/ThemeToggle";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="text-primary">404</span> - Page Not Found
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
