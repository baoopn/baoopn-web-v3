import { useState, useEffect } from "react";
import { Reveal } from "./utils/Reveal";

const HERO_TITLE = "Bao Nguyen";
const HERO_SUBTITLE = "Full-stack Web and App Developer";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 ">
      {/* <div className={`abstract-background transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}/> */}
      <Reveal >
        <div className="profile-image w-32 h-32 md:w-48 md:h-48 relative rounded-full overflow-hidden border-4 border-[var(--primary-pink)] bg-[var(--primary-pink)] drop-shadow-md">
          <img
            src="/Bao_photo.jpg"
            alt="Bao's Profile"
          />
        </div>
      </Reveal>
      <Reveal >
        <h1 className="text-4xl font-bold mt-4">{HERO_TITLE}</h1>
      </Reveal>
      <Reveal >
        <p className="text-lg mt-2">{HERO_SUBTITLE}</p>
      </Reveal>
    </section>
  );
};

export default HeroSection;