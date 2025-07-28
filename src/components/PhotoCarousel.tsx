import React, { useState, useEffect } from 'react';
import { Camera, Star, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const galleryImages = [
  '/images/valen1.jpeg',
  '/images/valen2.jpeg',
  '/images/valen3.jpeg',
  '/images/valen4.jpeg',
  '/images/valen5.jpeg',
  '/images/valen6.jpeg',
  '/images/valen7.jpeg',
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.3, duration: 0.7 }
  })
};

export const PhotoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const getVisibleImages = () => {
    const images = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + galleryImages.length) % galleryImages.length;
      images.push({ src: galleryImages[index], index, position: i });
    }
    return images;
  };

  return (
    <motion.section
      className="py-16 sm:py-24 bg-gradient-to-br from-purple-50 via-purple-100 to-indigo-50 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-indigo-100/20"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-20"
          custom={0}
          variants={fadeInVariants}
        >
          <div className="inline-block relative mb-8 sm:mb-12">
            <motion.div
              className="bg-gradient-to-br from-purple-200 to-indigo-300 w-20 h-20 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Camera className="h-10 w-10 sm:h-16 sm:w-16 text-indigo-700" />
            </motion.div>
            <motion.div
              className="absolute -inset-8 bg-purple-300/30 rounded-full -z-10 animate-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          <motion.h3
            className="text-4xl sm:text-7xl md:text-8xl font-bold text-gray-800 mb-6 sm:mb-8 italic"
            style={{ fontFamily: "'Dancing Script', cursive" }}
            custom={1}
            variants={fadeInVariants}
          >
            Galería de Recuerdos
          </motion.h3>

          <motion.div
            className="flex items-center justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8"
            custom={2}
            variants={fadeInVariants}
          >
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent to-purple-400"></div>
            <Star className="h-5 w-5 sm:h-8 sm:w-8 text-purple-400" />
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-l from-transparent to-purple-400"></div>
          </motion.div>

          <motion.p
            className="text-gray-600 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed tracking-wide px-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            custom={3}
            variants={fadeInVariants}
          >
            Algunos momentos especiales de mi vida que quiero compartir contigo
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center h-80 sm:h-96 md:h-[32rem] relative">
            {getVisibleImages().map(({ src, index, position }) => (
              <motion.div
                key={index}
                className={`absolute cursor-pointer transition-all duration-700 ease-in-out ${
                  position === 0
                    ? 'z-30 scale-100 opacity-100 translate-x-0'
                    : position === -1
                    ? 'z-20 scale-75 opacity-60 -translate-x-32 sm:-translate-x-48 md:-translate-x-64'
                    : 'z-20 scale-75 opacity-60 translate-x-32 sm:translate-x-48 md:translate-x-64'
                }`}
                onClick={() => (position === 0 ? setSelectedImage(src) : setCurrentIndex(index))}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + Math.abs(position) * 0.3 }}
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
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                          <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <Camera className="h-8 w-8 sm:h-12 sm:w-12 text-white mx-auto mb-3 animate-bounce drop-shadow-lg" />
                            <span className="text-white text-sm sm:text-lg font-medium lowercase drop-shadow-lg">ver imagen</span>
                          </div>
                        </div>

                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-0 group-hover:scale-100 rounded-full p-3 bg-gradient-to-br from-purple-400/50 to-indigo-400/50 animate-pulse shadow-lg">
                          <Heart className="h-6 w-6 text-white drop-shadow-lg" />
                        </div>
                      </>
                    )}
                  </div>

                  {position === 0 && (
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Nav buttons */}
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

          {/* Dots */}
          <div className="flex justify-center space-x-3 mt-8 sm:mt-12">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-purple-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative max-w-full max-h-full">
            <img
              src={selectedImage}
              alt="imagen ampliada"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur-sm transition-colors"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};
