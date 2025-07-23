import React from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-12 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="mb-8 sm:mb-12">
          <div className="flex justify-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
          </div>
          
          <h4 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 italic px-4" style={{ fontFamily: 'cursive' }}>
            ¡gracias por ser parte de mi historia!
          </h4>
          
          <p className="text-sm sm:text-lg opacity-90 leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto lowercase tracking-wide px-4">
            este día marca el inicio de una nueva etapa en mi vida, y no hay nada 
            que me haga más feliz que compartirlo contigo. tu amistad y cariño 
            son los regalos más preciados que puedo recibir.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 sm:space-x-10 mb-8 sm:mb-12">
          <Heart className="h-8 w-8 sm:h-12 sm:w-12 animate-pulse drop-shadow-lg" />
          <Star className="h-8 w-8 sm:h-12 sm:w-12 animate-pulse drop-shadow-lg" style={{ animationDelay: '0.5s' }} />
          <Sparkles className="h-8 w-8 sm:h-12 sm:w-12 animate-pulse drop-shadow-lg" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <p className="text-xs sm:text-sm opacity-75 lowercase tracking-wide px-4">
            con todo mi amor • mis xv años • 15 de junio, 2024
          </p>
        </div>
      </div>
    </footer>
  );
};