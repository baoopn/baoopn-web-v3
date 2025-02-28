import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import ContactSection from '../components/Contact'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {

  return (
    <div className=''>
      <div>
        <ContactSection />
      </div>
    </div>
  )
}
