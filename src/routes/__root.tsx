import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import FixedNavbar from '../components/ui/FixedNavbar';
import { useScroll, motion } from 'framer-motion';
import { ScrollProvider } from '../context/ScrollContext';
import CollapsibleSpotify from '../components/ui/CollapsibleSpotify';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { scrollYProgress } = useScroll();

  return (
    <ScrollProvider scrollYProgress={scrollYProgress}>
      <div className="font-comfortaa root-container min-h-[calc(100vh+1px)]">
        <FixedNavbar />
        <motion.div
          className='progress-bar fixed left-0 top-[72px] z-5 h-1 w-screen bg-[var(--text-color)]'
          style={{
            scaleX: scrollYProgress,
            transformOrigin: '0 0',
          }}
        />
        <div className="content-container">
          <Outlet />
        </div>

        {/* Spotify Now Playing component */}
        <CollapsibleSpotify />
      </div>
    </ScrollProvider>
  );
}

export default RootComponent;
