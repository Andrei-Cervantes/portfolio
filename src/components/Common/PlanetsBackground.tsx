import { Parallax } from "react-scroll-parallax";
import { planet1, planet2, planet3, planet4 } from "../../assets/planets";

const PlanetsBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Distant planet - top left corner */}
      <Parallax
        speed={-5}
        scale={[0.8, 1.2]}
        translateX={[-20, 20]}
        className="absolute top-[5%] left-[5%]"
      >
        <img
          src={planet1}
          alt="Distant Planet"
          className="w-32 opacity-70 drop-shadow-[0_0_30px_rgba(147,197,253,0.4)]"
        />
      </Parallax>

      {/* Mid-distance planet - top right */}
      <Parallax
        speed={-15}
        scale={[1.1, 0.9]}
        translateX={[30, -30]}
        className="absolute top-[15%] right-[8%]"
      >
        <img
          src={planet2}
          alt="Mid Planet"
          className="w-48 opacity-80 drop-shadow-[0_0_40px_rgba(167,139,250,0.4)]"
        />
      </Parallax>

      {/* Closer planet - center left */}
      <Parallax
        speed={-25}
        scale={[0.7, 1.3]}
        translateX={[-40, 40]}
        rotate={[0, 180]}
        className="absolute top-[50%] left-[15%]"
      >
        <img
          src={planet3}
          alt="Foreground Planet"
          className="w-28 opacity-75 drop-shadow-[0_0_50px_rgba(236,72,153,0.4)]"
        />
      </Parallax>

      {/* Additional planet - bottom right */}
      <Parallax
        speed={-10}
        scale={[1.2, 0.8]}
        translateX={[20, -20]}
        translateY={[-10, 10]}
        className="absolute bottom-[10%] right-[12%]"
      >
        <img
          src={planet4}
          alt="Background Planet"
          className="w-36 opacity-60 drop-shadow-[0_0_25px_rgba(34,197,94,0.4)]"
        />
      </Parallax>
    </div>
  );
};

export default PlanetsBackground;
