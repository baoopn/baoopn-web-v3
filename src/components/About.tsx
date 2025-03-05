import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Reveal } from "./utils/Reveal";

const SOCIAL_MEDIA = [
  {
    href: "https://www.github.com/baoopn",
    icon: FaGithub,
    srText: "Github",
  },
  {
    href: "https://www.linkedin.com/in/baoopn",
    icon: FaLinkedin,
    srText: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/baoongisoo",
    icon: FaInstagram,
    srText: "Instagram",
  },
  {
    href: "mailto:me@baoopn.com",
    icon: FaEnvelope,
    srText: "Email",
  }
];

const AboutSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-24">
      <div className="max-w-4xl m-auto flex items-center flex-col px-4">
        <Reveal>
          <h2 className="text-4xl font-semibold text-center">About Me</h2>
        </Reveal>
        <Reveal width="100%">
          <p className="mt-8 text-justify">
            Hi, I&apos;m Bao Nguyen, a passionate Full-Stack Web and App
            Developer with a drive for creating innovative solutions. With a
            solid background in modern technologies and a knack for
            problem-solving, I bring creativity and technical expertise to every
            project I undertake.
          </p>
        </Reveal>
        <Reveal width="100%">
          <p className="mt-4 text-justify">
            Over the years, I have developed a deep understanding of both
            front-end and back-end technologies. From building responsive user
            interfaces to designing efficient databases, I strive to deliver
            seamless and robust applications. My journey has involved working
            with a variety of frameworks and tools, including React, Next.js,
            Node.js, and more.
          </p>
        </Reveal>
        <Reveal width="100%">
          <p className="mt-4 text-justify">
            I&apos;m constantly exploring new trends in the tech world and
            learning new skills to stay ahead. Whether you&apos;re looking for a
            dynamic web application or a complex backend system, I am excited to
            collaborate and bring your vision to life.
          </p>
        </Reveal>
        <Reveal width="100%">
          <p className="mt-4 text-justify">
            Let&apos;s connect and create something amazing together!
          </p>
        </Reveal>
        <Reveal>
          <div className="flex justify-center mt-4 space-x-8">
            {SOCIAL_MEDIA.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-[var(--text-color)] hover:text-[var(--less-dark-pink)] transition-colors"
              >
                <social.icon className="w-8 h-8" />
                <span className="sr-only">{social.srText}</span>
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <img
            className="mt-8 rounded-md"
            src="https://cdn.baoopn.com/data/img/Bao_cover.jpg"
            alt="Bao Nguyen Image"
            width={600}
            height={600}
          />
        </Reveal>
      </div>
    </section>
  );
};

export default AboutSection;