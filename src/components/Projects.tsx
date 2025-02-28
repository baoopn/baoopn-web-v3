import { Reveal } from "./utils/Reveal";
import ProjectCard from "./ui/ProjectCard";

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
    title: "Personal Portfolio",
    period: "Feb 2025",
    description: "A responsive portfolio website built with React and Framer Motion for smooth animations.",
    imageSrc: "/thumbs/portfolio-thumb.png",
    imageAlt: "Portfolio website screenshot",
    technologies: ["React", "TypeScript", "TanStack Router", "Framer Motion", "Tailwind CSS"],
    blogPage: undefined,
    demoLink: "https://baoopn.com/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-24">
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
          {PROJECTS.map((project, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;