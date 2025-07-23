import { useState, useEffect } from 'react';

export const useAudio = (audioUrl: string) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioElement = new Audio(audioUrl);
    audioElement.loop = true;
    audioElement.volume = 0.3;
    setAudio(audioElement);
    
    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.src = '';
      }
    };
  }, [audioUrl]);

  const toggleMusic = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return { isPlaying, toggleMusic };
};