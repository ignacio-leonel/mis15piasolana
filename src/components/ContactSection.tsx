import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Heart } from 'lucide-react';

const fadeIn = (direction = 'up', delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: 'easeOut',
      },
    },
  };
};

export const ContactSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5212345678901";
    const message = "¡Hola! Quiero confirmar mi asistencia a tus XV años 💜";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.section
      variants={fadeIn('up', 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 relative"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          variants={fadeIn('up', 0.2)}
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-16 shadow-2xl border border-white/60"
        >
          <div className="mb-10">
            <div className="bg-gradient-to-br from-purple-200 to-pink-200 w-20 h-20 sm:w-28 sm:h-28 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <MessageCircle className="h-10 w-10 text-purple-600" />
            </div>

            <h3
              className="text-4xl sm:text-6xl font-bold text-gray-800 mb-4 italic"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Confirma tu Asistencia
            </h3>

            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          </div>

          <p className="text-gray-700 text-base sm:text-xl leading-relaxed mb-10 px-4 lowercase tracking-wide">
            Tu presencia es muy importante para mí. por favor confirmá tu asistencia
            para poder preparar todo con el cariño que te merecés.
          </p>

          <motion.button
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-8 sm:py-5 sm:px-12 rounded-2xl font-semibold text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-3 mx-auto"
          >
            <MessageCircle className="h-6 w-6" />
            <span>Confirmar por Whatsapp</span>
          </motion.button>

          <div className="mt-10 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border border-purple-200">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <Heart className="h-5 w-5 text-purple-500" />
              <span className="text-gray-600 text-sm sm:text-base lowercase">Fecha Límite</span>
              <Heart className="h-5 w-5 text-purple-500" />
            </div>
            <p className="text-gray-700 text-base sm:text-lg font-medium lowercase">
              Hasta el 8 de agosto para confirmar tu lugar
            </p>
          </div>

          <div className="mt-8 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-2xl p-6 shadow-md">
            <p className="text-base sm:text-xl font-medium tracking-wide">
              ¡Espero verte en mi gran día! 💜
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
