import React, { useEffect, useRef, useState } from "react";
import { createFileRoute, useLocation } from "@tanstack/react-router";
import HeroSection from "../components/Hero";
import AboutSection from "../components/About";
import ProjectsSection from "../components/Projects";
import ContactSection from "../components/Contact";
import "../styles/styles.css";
import { useScroll, useTransform, motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const indexRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: indexRef,
  });

  // Dark theme colors
  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#14284a", "#16213e", "#1a1a2e"]
  );
  // Light theme colors
  const background2 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#fff5eb", "#FFF8EB", "#FFFAEB"]
  );

  // Detect color scheme
  useEffect(() => {
    // Check if user prefers dark mode
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setIsDarkMode(darkModeMediaQuery.matches);

    // Add listener for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (location.hash === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "projects" && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <motion.div
      ref={indexRef}
      className=""
      style={{ background: isDarkMode ? background : background2 }}
    >
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div ref={aboutRef} id="about" className="mt-80">
        <AboutSection />
      </div>
      <div ref={projectsRef} id="projects" className="mt-80">
        <ProjectsSection />
      </div>
      <div ref={contactRef} id="contact" className="mt-80">
        <ContactSection />
      </div>
    </motion.div>
  );
}

export default HomeComponent;
