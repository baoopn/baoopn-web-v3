import { FaGithub } from "react-icons/fa";
import { Reveal } from "./utils/Reveal";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl m-auto flex items-center flex-col px-4">
        <Reveal isSlide={true}>
          <h2 className="text-4xl font-semibold text-center">About Me</h2>
        </Reveal>
        <Reveal width="100%" isSlide={true}>
          <p className="mt-8 text-justify">
            Hi, I&apos;m Bao Nguyen, a passionate Full-Stack Web and App Developer with a drive for creating innovative
            solutions.
            With a solid background in modern technologies and a knack for problem-solving, I bring creativity and
            technical expertise to every project I undertake.
          </p>
        </Reveal>
        <Reveal width="100%" isSlide={true}>
          <p className="mt-4 text-justify">
            Over the years, I have developed a deep understanding of both front-end and back-end technologies.
            From building responsive user interfaces to designing efficient databases, I strive to deliver seamless and robust applications.
            My journey has involved working with a variety of frameworks and tools, including React, Next.js, Node.js, and more.
          </p>
        </Reveal>
        <Reveal width="100%" isSlide={true}>
          <p className="mt-4 text-justify">
            I&apos;m constantly exploring new trends in the tech world and learning new skills to stay ahead.
            Whether you&apos;re looking for a dynamic web application or a complex backend system, I am excited to collaborate and bring your vision to life.
          </p>
        </Reveal>
        <Reveal width="100%" isSlide={true}>
          <p className="mt-4 text-justify">
            Let&apos;s connect and create something amazing together!
          </p>
        </Reveal>
        <Reveal isSlide={true}>
          <div className="flex justify-center mt-4 space-x-8">
            <a href="www.github.com/baoopn" target="_blank" rel="noreferrer" className="text-2xl text-gray-500 hover:text-gray-400">
              <FaGithub className="w-6 h-6" />
              <span className="sr-only">Github</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutSection;