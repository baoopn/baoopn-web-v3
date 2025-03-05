import { useState, useRef } from "react";
import { Reveal } from "./utils/Reveal";
import ProjectCard from "./ui/ProjectCard";
import ActionButton from "./ui/ActionButton";

const PROJECTS = [
  {
    title: "Product Catalog API",
    period: "Dec 2024 - Feb 2025",
    description: "A modern RESTful API for managing product catalogs with authentication, media management, and caching.",
    imageSrc: "/thumbs/product-catalog-api.png",
    imageAlt: "Product Catalog API screenshot",
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "Cloudflare R2"],
    githubLink: "",
    blogPage: {
      slug: "product-catalog-api",
      page: 1
    }
  },
  {
    title: "Personal Portfolio App",
    period: "Feb 2025",
    description: "A responsive portfolio website built with React and Framer Motion for smooth animations.",
    imageSrc: "/thumbs/portfolio-thumb.png",
    imageAlt: "Portfolio website screenshot",
    technologies: ["React", "TypeScript", "TanStack Router", "Framer Motion", "Tailwind CSS"],
    blogPage: {
      slug: "portfolio-app",
      page: 1
    },
    demoLink: "https://baoopn.com/",
  },
];

const INITIAL_DISPLAY_COUNT = 3;

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const initialProjectsEndRef = useRef<HTMLDivElement>(null);

  const visibleProjects = showAll
    ? PROJECTS
    : PROJECTS.slice(0, INITIAL_DISPLAY_COUNT);

  const handleShowLess = () => {
    setShowAll(false);

    // Wait for the state update and DOM changes to take effect
    setTimeout(() => {
      if (initialProjectsEndRef.current) {
        // Scroll to the position just after the initial projects
        initialProjectsEndRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'end'
        });
      }
    }, 100);
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-24" ref={projectsSectionRef}>
      <div className="max-w-5xl m-auto flex items-center flex-col px-4">
        <Reveal>
          <h2 className="text-4xl font-semibold text-center">Projects</h2>
        </Reveal>

        <Reveal>
          <p className="mt-8 mb-12 text-center max-w-2xl">
            Here are some of my recent projects that showcase my skills and expertise in web development.
          </p>
        </Reveal>

        <div className="w-full space-y-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              period={project.period}
              description={project.description}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              technologies={project.technologies}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
              blogPage={project.blogPage}
            />
          ))}

          {/* This div marks the end of the initial projects */}
          {!showAll && <div ref={initialProjectsEndRef} className="h-0 w-0"></div>}
        </div>

        {PROJECTS.length > INITIAL_DISPLAY_COUNT && !showAll && (
          <Reveal>
            <ActionButton
              onClick={() => setShowAll(true)}
              primary
              className="mt-12"
            >
              <span>Show More Projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </ActionButton>
          </Reveal>
        )}

        {showAll && PROJECTS.length > INITIAL_DISPLAY_COUNT && (
          <Reveal>
            <ActionButton
              onClick={handleShowLess}
              className="mt-12"
            >
              <span>Show Less</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </ActionButton>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;