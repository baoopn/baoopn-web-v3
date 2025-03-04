import { useState } from "react";
import SpotifyNowPlaying from "./SpotifyNowPlaying";
import { motion, AnimatePresence } from "framer-motion";
import ActionButton from "./ActionButton";

const CollapsibleSpotify: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-end">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 100 }}
            transition={{ duration: 0.3 }}
            className="mr-4"
          >
            <SpotifyNowPlaying />
          </motion.div>
        )}
      </AnimatePresence>

      <ActionButton
        onClick={() => setIsVisible(!isVisible)}
        primary
        className="p-2 rounded-full !px-2 !py-2 shadow-lg"
        aria-label={isVisible ? "Hide music player" : "Show music player"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isVisible ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <path d="M9 18V5l12-2v13"></path>
              <circle cx="6" cy="18" r="3"></circle>
              <circle cx="18" cy="16" r="3"></circle>
            </>
          )}
        </svg>
      </ActionButton>
    </div>
  );
};

export default CollapsibleSpotify;
