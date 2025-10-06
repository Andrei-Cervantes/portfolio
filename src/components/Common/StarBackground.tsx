import { useEffect, useState } from "react";
import { type Star, type Meteor } from "../../types/starTypes";

const starColors = [
  "rgba(155, 176, 255, 1)", // O - blue (very hot)
  "rgba(170, 191, 255, 1)", // B - blue-white
  "rgba(202, 215, 255, 1)", // A - white
  "rgba(248, 247, 255, 1)", // F - yellow-white
  "rgba(255, 244, 234, 1)", // G - pale yellow (like our Sun)
  "rgba(255, 210, 161, 1)", // K - orange
  "rgba(255, 178, 107, 1)", // M - red-orange (coolest)
];

const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);

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
        background: starColors[Math.floor(Math.random() * starColors.length)],
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
  }, []);

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
