import { useEffect, useRef } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import ProjectsSection from '../components/Projects'

export const Route = createFileRoute('/projects')({
  component: ProjectsComponent,
})

function ProjectsComponent() {
  const navigate = useNavigate()
  const topRef = useRef<HTMLDivElement | null>(null)
  const projectsRef = useRef<HTMLDivElement | null>(null)
  const bottomRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView()
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === topRef.current) {
              navigate({ to: '/about' })
            } else if (entry.target === bottomRef.current) {
              navigate({ to: '/contact' })
            }
          };
        })
      },
      { threshold: 1.0 }
    );

    if (topRef.current) {
      observer.observe(topRef.current)
    }
    if (bottomRef.current) {
      observer.observe(bottomRef.current)
    }

    return () => {
      if (topRef.current) {
        observer.unobserve(topRef.current)
      }
      if (bottomRef.current) {
        observer.unobserve(bottomRef.current)
      }
    }
  }, [navigate])

  return (
    <div className="">
      <div ref={topRef} style={{ height: '50vh' }} />
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>
      <div ref={bottomRef} style={{ height: '50vh' }} />
    </div>
  )
}
