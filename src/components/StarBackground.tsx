import { useEffect, useState } from "react";
import { type Star } from "../types/starTypes";

const StarBackground = () => {
    const [stars, setStars] = useState<Star[]>([]);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);

        const newStars: Star[] = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            })
        }

        setStars(newStars);
    }

    useEffect(() => {
        generateStars();
    }, []);

    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star: Star) => (
            <div key={star.id} className="star animate-pulse-subtle" style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                left: `${star.x}%`,
                top: `${star.y}%`,
                opacity: star.opacity,
                animationDuration: `${star.animationDuration}s`,
            }} />
        ))}
    </div>
};

export default StarBackground;