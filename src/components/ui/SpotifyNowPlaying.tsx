import { useState, useEffect, useRef } from "react";
import { SpotifyPlayingTrack } from "../../types/types";
import { LISTENING_API_URL } from "../../utils/constants";
import MusicPlayingAnimation from "./MusicPlayingAnimation";

const SpotifyNowPlaying: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [track, setTrack] = useState<SpotifyPlayingTrack>({
    playing: false,
    id: '',
  });
  const [loading, setLoading] = useState(true);
  const [hasResponse, setHasResponse] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  // Keep track of the previous state to detect changes
  const previousStateRef = useRef({
    id: '',
    playing: false
  });

  // Keep track of whether the iframe has been mounted
  const iframeMounted = useRef(false);

  useEffect(() => {
    const fetchCurrentlyPlaying = () => {
      if (!hasResponse) {
        // Only set loading on initial fetch
        setLoading(true);
      }

      const socket = new WebSocket(`wss://${LISTENING_API_URL}`);

      socket.onopen = () => {
        socket.send('currently-playing');
      };

      socket.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data);

          if (message) {
            // Check if the track ID or playing state has changed
            const trackChanged = message.id !== previousStateRef.current.id;
            const stateChanged = message.playing !== previousStateRef.current.playing;

            if (trackChanged || stateChanged) {
              // Update iframe loading state for any relevant change
              setIframeLoading(true);
              previousStateRef.current = {
                id: message.id,
                playing: message.playing
              };
            }

            setTrack(message);
            setLoading(false);
            setHasResponse(true);
          }
        } catch (e) {
          console.error("Error parsing WebSocket message:", e);
          setLoading(false);
          setHasResponse(true);
        }
      };

      socket.onclose = () => {
        setLoading(false);
        setHasResponse(true);
      };

      socket.onerror = (error) => {
        console.error(error);
        setLoading(false);
        setHasResponse(true);
      };

      // Set a timeout to ensure loading state doesn't persist indefinitely
      const timeoutId = setTimeout(() => {
        setLoading(false);
        setHasResponse(true);
      }, 5000);

      return { socket, timeoutId };
    };

    const { socket, timeoutId } = fetchCurrentlyPlaying();

    const interval = setInterval(() => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send('currently-playing');
      } else {
        socket.close();
        fetchCurrentlyPlaying();
      }
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
      socket.close();
    };
  }, [hasResponse]);

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIframeLoading(false);
    iframeMounted.current = true;
  };

  // Show loading state only for initial connection
  if (loading && !hasResponse) {
    return (
      <div className={`bg-[var(--background-lighter)] p-3 rounded-lg shadow-md ${className}`}>
        <div className="flex items-center justify-center py-2">
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-[var(--primary-pink)] mr-2"></div>
          <p className="text-[var(--text-color-lighter)] text-sm">
            Checking music status...
          </p>
        </div>
      </div>
    );
  }

  // If not playing, show a message
  if (!track.playing) {
    return (
      <div className={`bg-[var(--background-lighter)] p-3 rounded-lg shadow-md ${className}`}>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400 mr-2"
          >
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
          <p className="text-[var(--text-color-lighter)] text-sm">
            Bao isn't listening to music right now
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="music" className={`bg-[var(--slider-background)]/70 drop-shadow-md p-3 rounded-lg shadow-md ${className}`}>
      <div className="flex items-center mb-1">
        <span className="text-[var(--text-color)] text-sm mr-2 drop-shadow-md">
          Currently listening to:
        </span>
        <MusicPlayingAnimation height="15px" width="70px" number={10} className="mx-auto" />
      </div>
      <div className="relative">
        {iframeLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[var(--background-lighter)]/30 backdrop-blur-sm rounded-xl z-10">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[var(--primary-pink)]"></div>
          </div>
        )}
        <iframe
          className="bg-transparent border-0 rounded-xl"
          src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator`}
          width="300"
          height="80"
          loading="lazy"
          style={{ border: '0' }}
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
    </div>
  );
};

export default SpotifyNowPlaying;