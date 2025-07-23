import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5212345678901"; // Reemplazar con el número real
    const message = "¡Hola! Quiero confirmar mi asistencia a tus XV años 💜";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-4 w-32 h-32 sm:top-20 sm:left-20 sm:w-64 sm:h-64 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-4 w-32 h-32 sm:bottom-20 sm:right-20 sm:w-64 sm:h-64 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl sm:rounded-[2rem] p-8 sm:p-16 shadow-2xl border border-white/50">
          <div className="mb-8 sm:mb-12">
            <div className="bg-gradient-to-br from-green-100 to-blue-100 w-20 h-20 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-xl">
              <MessageCircle className="h-10 w-10 sm:h-16 sm:w-16 text-green-600" />
            </div>
            
            <h3 className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-800 mb-6 sm:mb-8 italic" style={{ fontFamily: 'cursive' }}>
              confirma tu asistencia
            </h3>
            
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
          </div>
          
          <p className="text-gray-700 text-base sm:text-xl leading-relaxed mb-8 sm:mb-12 lowercase tracking-wide px-4">
            tu presencia es muy importante para mí. por favor confirma tu asistencia 
            para poder preparar todo con el cariño que te mereces.
          </p>
          
          <button
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white py-4 sm:py-6 px-8 sm:px-12 rounded-2xl sm:rounded-3xl font-medium text-lg sm:text-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-3 sm:space-x-4 mx-auto lowercase tracking-wide"
          >
            <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8" />
            <span>confirmar por whatsapp</span>
          </button>
          
          <div className="mt-8 sm:mt-12">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-green-100">
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500" />
                <span className="text-gray-600 text-sm sm:text-base lowercase">fecha límite</span>
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500" />
              </div>
              <p className="text-gray-700 text-base sm:text-lg font-medium lowercase">
                hasta el 10 de junio para confirmar tu lugar
              </p>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-12 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <p className="text-base sm:text-xl font-medium lowercase tracking-wide">
              ¡espero verte en mi gran día! 💜
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};