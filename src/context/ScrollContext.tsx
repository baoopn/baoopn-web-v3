import React, { createContext, useContext, useEffect } from 'react';
import { MotionValue, useMotionValueEvent } from 'framer-motion';

interface ScrollContextProps {
  scrollYProgress: MotionValue<number>;
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
};

export const ScrollProvider: React.FC<{ scrollYProgress: MotionValue<number>; children: React.ReactNode }> = ({
  scrollYProgress,
  children,
}) => {

  return <ScrollContext.Provider value={{ scrollYProgress }}>{children}</ScrollContext.Provider>;
};