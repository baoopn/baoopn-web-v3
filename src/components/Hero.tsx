import { useState, useEffect, useRef } from "react";
import { SpotifyPlayingTrack } from "../types/types";
import { LISTENING_API_URL } from "../utils/constants";
import MusicPlayingAnimation from "./ui/MusicPlayingAnimation";
import { Reveal } from "./utils/Reveal";

const HERO_TITLE = "Bao Nguyen";
const HERO_SUBTITLE = "Full-stack Web and App Developer";
const HERO_WELCOME = "Welcome Home!";
const HERO_DESCRIPTION = "This is a simple Hero Section";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [track, setTrack] = useState<SpotifyPlayingTrack>({
    albumImageUrl: '',
    title: '',
    artist: '',
    isPlaying: false,
    songUrl: '',
    id: '',
    progress_ms: 0,
    duration_ms: 0
  });

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const fetchCurrentlyPlaying = () => {
      const socket = new WebSocket(`wss://${LISTENING_API_URL}`);

      socket.onopen = () => {
        console.log('Connected to WebSocket');
        socket.send(JSON.stringify({ type: 'get-currently-playing' }));
      };

      socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if (message.type === 'currently-playing') {
          setTrack(message.data);
        }
      };

      socket.onclose = () => {
        console.log('Disconnected from WebSocket');
      };

      socket.onerror = (error) => {
        console.error(error);
      };

      return socket;
    };

    const socket = fetchCurrentlyPlaying();

    const interval = setInterval(() => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'get-currently-playing' }));
      } else {
        socket.close();
        fetchCurrentlyPlaying();
      }
    }, 5000);

    return () => {
      clearInterval(interval);
      socket.close();
    };
  }, []);

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className={`abstract-background transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}/>
      <Reveal>
        <div className="profile-image w-32 h-32 md:w-48 md:h-48 relative rounded-full overflow-hidden border-4 border-[var(--primary-pink)] bg-[var(--primary-pink)] drop-shadow-md">
          <img
            src="/Bao_photo.jpg"
            alt="Bao's Profile"
          />
        </div>
      </Reveal>
      <Reveal>
        <h1 className="text-4xl font-bold mt-4">{HERO_TITLE}</h1>
      </Reveal>
      <Reveal>
        <p className="text-lg mt-2">{HERO_SUBTITLE}</p>
      </Reveal>
      {track.isPlaying && (
        <div id="music" className="absolute bottom-2 right-2 mb-4 mr-4 max-w-xs text-center items-start justify-start drop-text">
          <MusicPlayingAnimation className="mx-auto" height="15px" width="150px" number={20}/>
          <div className="text-gray-500">
            My currently listening track: 
          </div>
          <iframe
            className="bg-transparent border-0 rounded-xl mt-1"
            src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator`}
            width="300"
            height="80"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ border: '0' }}
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default HeroSection;