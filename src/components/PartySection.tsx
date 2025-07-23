import React from 'react';
import { Home, Calendar, Clock, MapPin, Gift, Music, Sparkles } from 'lucide-react';

interface PartySectionProps {
  show: boolean;
}

export const PartySection: React.FC<PartySectionProps> = ({ show }) => {
  if (!show) return null;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-4 w-32 h-32 sm:top-20 sm:left-20 sm:w-64 sm:h-64 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-4 w-32 h-32 sm:bottom-20 sm:right-20 sm:w-64 sm:h-64 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-block relative mb-8 sm:mb-12">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-20 h-20 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto shadow-xl">
              <Home className="h-10 w-10 sm:h-16 sm:w-16 text-blue-600" />
            </div>
            <div className="absolute -inset-8 bg-blue-200/30 rounded-full -z-10 animate-pulse"></div>
          </div>
          
          <h3 className="text-4xl sm:text-7xl md:text-8xl font-bold text-gray-800 mb-6 sm:mb-8 italic" style={{ fontFamily: 'cursive' }}>
            celebración & fiesta
          </h3>
          
          <div className="flex items-center justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
            <Sparkles className="h-5 w-5 sm:h-8 sm:w-8 text-blue-400" />
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-l from-transparent to-blue-400"></div>
          </div>
          
          <p className="text-gray-600 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed lowercase tracking-wide px-4">
            después de la ceremonia, continuemos la celebración con una noche llena de 
            alegría, música y momentos inolvidables
          </p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl sm:rounded-[2rem] p-8 sm:p-16 shadow-2xl border border-white/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center mb-12 sm:mb-16">
            <div className="group">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-all duration-500 shadow-lg">
                <Calendar className="h-12 w-12 sm:h-16 sm:w-16 text-blue-600" />
              </div>
              <h4 className="text-xl sm:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4 italic" style={{ fontFamily: 'cursive' }}>fecha</h4>
              <p className="text-gray-600 text-xl sm:text-2xl font-medium mb-2">sábado</p>
              <p className="text-gray-600 text-sm sm:text-lg lowercase">15 de junio, 2024</p>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-all duration-500 shadow-lg">
                <Clock className="h-12 w-12 sm:h-16 sm:w-16 text-blue-600" />
              </div>
              <h4 className="text-xl sm:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4 italic" style={{ fontFamily: 'cursive' }}>hora</h4>
              <p className="text-gray-600 text-xl sm:text-2xl font-medium mb-2">8:00 pm</p>
              <p className="text-gray-600 text-xs sm:text-sm lowercase">después de la ceremonia</p>
            </div>
          
          
          
          
          </div>
        </div>
      </div>
    </section>
  );
};