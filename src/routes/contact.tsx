import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import ContactSection from '../components/Contact'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  const topRef = useRef<HTMLDivElement | null>(null)
  const contactRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView()
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === topRef.current) {
              navigate({ to: '/projects' })
            }
          }
        }
        )
      },
      { threshold: 1.0 }
    )

    if (topRef.current) {
      observer.observe(topRef.current)
    }

    return () => {
      if (topRef.current) {
        observer.unobserve(topRef.current)
      }
    }
  }, [navigate]);

  return (
    <div className=''>
      <div ref={topRef} style={{ height: '50vh' }} />
      <div ref={contactRef}>
        <ContactSection />
      </div>
    </div>
  )
}
