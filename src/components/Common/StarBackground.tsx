import { useEffect, useState } from "react";
import { type Star, type Meteor } from "../../types/starTypes";
import { starColors } from "../../constants/starColors";
import { useTheme } from "../../hooks/useTheme";

const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);
  const { isDarkMode } = useTheme();

  // Stars
  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 6000
    );

    const newStars: Star[] = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
        background: isDarkMode
          ? starColors[Math.floor(Math.random() * starColors.length)]
          : "white",
      });
    }

    setStars(newStars);
  };

  // Meteors
  const generateMeteors = () => {
    const numberOfMeteors = 4;

    const newMeteors: Meteor[] = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        opacity: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
        background: "white",
      });
    }

    setMeteors(newMeteors);
  };

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isDarkMode]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star: Star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            background: star.background,
          }}
        />
      ))}
      {meteors.map((meteor: Meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 50}px`,
            height: `${meteor.size * 2}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            opacity: meteor.opacity,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
