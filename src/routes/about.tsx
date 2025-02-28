import { useEffect } from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: AboutComponent,
});

function AboutComponent() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: '/', hash: 'about' });
  }, [navigate]);

  return null; // No need to render anything as we are redirecting
}

export default AboutComponent;
