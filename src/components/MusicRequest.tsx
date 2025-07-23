import React, { useState } from 'react';
import { Music, Send, Heart } from 'lucide-react';

export const MusicRequest: React.FC = () => {
  const [name, setName] = useState('');
  const [song, setSong] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && song.trim()) {
      // Aquí se podría integrar con Google Drive API o un servicio similar
      console.log('Música solicitada:', { name, song });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setSong('');
      }, 3000);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-4 w-32 h-32 sm:top-20 sm:left-20 sm:w-64 sm:h-64 bg-purple-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-4 w-32 h-32 sm:bottom-20 sm:right-20 sm:w-64 sm:h-64 bg-pink-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block relative mb-8 sm:mb-12">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-20 h-20 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto shadow-xl">
              <Music className="h-10 w-10 sm:h-16 sm:w-16 text-purple-600" />
            </div>
            <div className="absolute -inset-8 bg-purple-200/30 rounded-full -z-10 animate-pulse"></div>
          </div>
          
          <h3 className="text-4xl sm:text-7xl md:text-8xl font-bold text-gray-800 mb-6 sm:mb-8 italic" style={{ fontFamily: 'cursive' }}>
            música para la fiesta
          </h3>
          
          <div className="flex items-center justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent to-purple-400"></div>
            <Heart className="h-5 w-5 sm:h-8 sm:w-8 text-purple-400" />
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
          
          <p className="text-gray-600 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed lowercase tracking-wide px-4">
            ayúdame a crear la playlist perfecta para mi celebración. 
            ¿qué canción te gustaría que suene en mi fiesta?
          </p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl sm:rounded-[2rem] p-8 sm:p-12 shadow-2xl border border-white/50">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div>
                <label className="block text-lg sm:text-xl font-medium text-gray-700 mb-3 sm:mb-4 italic" style={{ fontFamily: 'cursive' }}>
                  tu nombre
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/70 border border-purple-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-gray-700 text-sm sm:text-base lowercase placeholder-gray-400 backdrop-blur-sm"
                  placeholder="escribe tu nombre aquí..."
                  required
                />
              </div>
              
              <div>
                <label className="block text-lg sm:text-xl font-medium text-gray-700 mb-3 sm:mb-4 italic" style={{ fontFamily: 'cursive' }}>
                  canción que te gustaría escuchar
                </label>
                <input
                  type="text"
                  value={song}
                  onChange={(e) => setSong(e.target.value)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/70 border border-purple-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-gray-700 text-sm sm:text-base lowercase placeholder-gray-400 backdrop-blur-sm"
                  placeholder="nombre de la canción y artista..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 sm:py-5 px-6 sm:px-8 rounded-2xl font-medium text-base sm:text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-3 lowercase tracking-wide"
              >
                <Send className="h-5 w-5 sm:h-6 sm:w-6" />
                <span>enviar sugerencia</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-8 sm:py-12">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="h-10 w-10 sm:h-12 sm:w-12 text-green-600 animate-pulse" />
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 italic" style={{ fontFamily: 'cursive' }}>
                ¡gracias por tu sugerencia!
              </h4>
              <p className="text-gray-600 text-base sm:text-lg lowercase tracking-wide">
                tu canción ha sido guardada para la playlist de la fiesta 💜
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};