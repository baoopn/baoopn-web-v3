import { useEffect, useRef } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import ProjectsSection from '../components/Projects'

export const Route = createFileRoute('/projects')({
  component: ProjectsComponent,
})

function ProjectsComponent() {
  return (
    <div className="">
      <div>
        <ProjectsSection />
      </div>
    </div>
  )
}
