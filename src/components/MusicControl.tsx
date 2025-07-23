import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicControlProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const MusicControl: React.FC<MusicControlProps> = ({ isPlaying, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-2 sm:p-3 hover:bg-white/30 transition-all duration-300 shadow-lg group"
    >
      {isPlaying ? (
        <Volume2 className="h-4 w-4 sm:h-6 sm:w-6 text-purple-600 group-hover:scale-110 transition-transform" />
      ) : (
        <VolumeX className="h-4 w-4 sm:h-6 sm:w-6 text-purple-600 group-hover:scale-110 transition-transform" />
      )}
    </button>
  );
};