import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  const sequence = [
    "a Web Developer",
    3000,
    "a Competitive Gamer",
    1000,
    "a Nap Enthusiast",
    2000,
  ];

  return (
    <section id="home" className="mt-0 pt-[260px] pb-[100px] px-10">
      <div className="flex items-center flex-col md:flex-row">
        <div className="w-3/4">
          <span className="font-bold tracking-wider px-2 py-3 border-1 border-white/50 bg-custom-gradient inline-block mb-4">
            Welcome to my Portfolio
          </span>
          <h1 className="font-bold mb-5 min-h-[72px] flex gap-2 flex-col">
            Hi I'm Andrei,
            <TypeAnimation
              sequence={sequence}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#b8b8b8] leading-[1.5em] w-[96%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            magni culpa est, laudantium soluta eveniet, quo adipisci tenetur
            amet quidem, blanditiis aut dolores debitis! Maxime corrupti debitis
            esse magnam pariatur!
          </p>
          <button
            className="text-white font-bold text-xl mt-16 tracking-wider flex items-center hover:underline underline-offset-2"
            onClick={() => console.log("connect")}
          >
            Let's connect
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center">
          {/* place image */}
          <div className="w-full bg-red-500" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
