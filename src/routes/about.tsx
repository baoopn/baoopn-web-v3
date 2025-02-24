import { useEffect, useRef } from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import AboutSection from '../components/About';

export const Route = createFileRoute('/about')({
  component: AboutComponent,
});

function AboutComponent() {
  const navigate = useNavigate();
  const topRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === topRef.current) {
              navigate({ to: '/' });
            } else if (entry.target === bottomRef.current) {
              navigate({ to: '/projects' });
            }
          }
        });
      },
      { threshold: 1.0 }
    );

    if (topRef.current) {
      observer.observe(topRef.current);
    }
    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }

    return () => {
      if (topRef.current) {
        observer.unobserve(topRef.current);
      }
      if (bottomRef.current) {
        observer.unobserve(bottomRef.current);
      }
    };
  }, [navigate]);

  return (
    <div className="">
      <div ref={topRef} style={{ height: '50vh' }} />
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={bottomRef} style={{ height: '50vh' }} />
    </div>
  );
}
