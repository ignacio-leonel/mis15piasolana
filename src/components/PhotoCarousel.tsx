import React, { useState, useEffect } from 'react';
import { Camera, Star, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const galleryImages = [
  '/images/valen1.jpeg',
  '/images/valen2.jpeg',
  '/images/valen3.jpeg',
  '/images/valen4.jpeg',
  '/images/valen5.jpeg',
  '/images/valen6.jpeg',
  '/images/valen7.jpeg',];

export const PhotoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const getVisibleImages = () => {
    const images = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + galleryImages.length) % galleryImages.length;
      images.push({ src: galleryImages[index], index, position: i });
    }
    return images;
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/20 to-purple-100/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-block relative mb-8 sm:mb-12">
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 w-20 h-20 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto shadow-xl">
              <Camera className="h-10 w-10 sm:h-16 sm:w-16 text-indigo-600" />
            </div>
            <div className="absolute -inset-8 bg-indigo-200/30 rounded-full -z-10 animate-pulse"></div>
          </div>
          
          <h3 className="text-4xl sm:text-7xl md:text-8xl font-bold text-gray-800 mb-6 sm:mb-8 italic" style={{ fontFamily: 'cursive' }}>
            galería de recuerdos
          </h3>
          
          <div className="flex items-center justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent to-indigo-400"></div>
            <Star className="h-5 w-5 sm:h-8 sm:w-8 text-indigo-400" />
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-l from-transparent to-indigo-400"></div>
          </div>
          
          <p className="text-gray-600 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed lowercase tracking-wide px-4">
            algunos momentos especiales de mi vida que quiero compartir contigo 
            antes de este gran día
          </p>
        </div>
        
        {/* Modern Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center h-80 sm:h-96 md:h-[32rem] relative">
            {getVisibleImages().map(({ src, index, position }) => (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-in-out cursor-pointer ${
                  position === 0 
                    ? 'z-30 scale-100 opacity-100 translate-x-0' 
                    : position === -1 
                    ? 'z-20 scale-75 opacity-60 -translate-x-32 sm:-translate-x-48 md:-translate-x-64' 
                    : 'z-20 scale-75 opacity-60 translate-x-32 sm:translate-x-48 md:translate-x-64'
                }`}
                onClick={() => position === 0 ? setSelectedImage(src) : setCurrentIndex(index)}
              >
                <div className="relative group">
                  <div className="w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[32rem] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                    <img 
                      src={src} 
                      alt={`recuerdo ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {position === 0 && (
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <Camera className="h-8 w-8 sm:h-12 sm:w-12 text-white mx-auto mb-3 animate-bounce drop-shadow-lg" />
                          <span className="text-white text-sm sm:text-lg font-medium lowercase drop-shadow-lg">ver imagen</span>
                        </div>
                      </div>
                    )}
                    
                    {position === 0 && (
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 animate-pulse">
                          <Heart className="h-5 w-5 text-white drop-shadow-lg" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {position === 0 && (
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-40 bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 sm:p-4 hover:bg-white/30 transition-all duration-300 shadow-lg group"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-40 bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 sm:p-4 hover:bg-white/30 transition-all duration-300 shadow-lg group"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 group-hover:scale-110 transition-transform" />
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center space-x-3 mt-8 sm:mt-12">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-purple-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <img 
              src={selectedImage} 
              alt="imagen ampliada"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur-sm transition-colors group"
            >
              <div className="relative">
                ✕
                <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
              </div>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};