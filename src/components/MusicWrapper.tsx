// src/components/MusicWrapper.tsx
import React, { useEffect, useRef, useState } from 'react';
import { MusicControl } from './MusicControl';

export const MusicWrapper: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    audioRef.current = new Audio('/music/cancion.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.6;

    // Intenta reproducir al cargar
    audioRef.current.play().catch(() => {
      setIsPlaying(false); // Si el navegador bloquea el autoplay
    });

    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <MusicControl isPlaying={isPlaying} onToggle={toggleMusic} />
    </>
  );
};
