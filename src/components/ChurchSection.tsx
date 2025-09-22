import React from 'react';
import { Church, Calendar, Clock, MapPin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChurchSectionProps {
  show: boolean;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25, // Aparecen de a una suavemente
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const elementVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const iconColors = [
  'from-pink-100 to-pink-200',
  'from-rose-100 to-pink-200',
  'from-pink-200 to-rose-100'
];

export const ChurchSection: React.FC<ChurchSectionProps> = ({ show }) => {
  if (!show) return null;

  const cards = [
    {
      icon: <Calendar className="h-12 w-12 sm:h-16 sm:w-16 text-pink-600" />,
      title: 'Fecha',
      subtitle: 'Martes',
      detail: '30 de Septiembre, 2025'
    },
    {
      icon: <Clock className="h-12 w-12 sm:h-16 sm:w-16 text-pink-600" />,
      title: 'Hora',
      subtitle: '20:30 PM',
      detail: 'Puntualidad por favor'
    },
    {
      icon: <MapPin className="h-12 w-12 sm:h-16 sm:w-16 text-pink-600" />,
      title: 'Lugar',
      subtitle: 'Catedral de Tucumán',
      detail: (
        <a
          href="https://maps.app.goo.gl/5wKDa2wuZadUwymSA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 underline hover:text-pink-800 transition-colors duration-300"
        >
          Av. 24 de Septiembre 420. Tucumán
        </a>
      )
    }
  ];

  return (
    <motion.section
      className="py-16 sm:py-24 bg-gradient-to-br from-pink-50 via-white to-rose-50 relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100/30 to-rose-100/30"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Bloque principal con animación secuencial */}
        <motion.div
          className="text-center mb-12 sm:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Ícono principal */}
          <motion.div className="inline-block relative mb-8 sm:mb-12" variants={elementVariants}>
            <div className="bg-gradient-to-br from-pink-100 to-rose-100 w-20 h-20 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto shadow-xl">
              <Church className="h-10 w-10 sm:h-16 sm:w-16 text-pink-600" />
            </div>
          </motion.div>

          {/* Título */}
          <motion.h3
            className="text-4xl sm:text-7xl md:text-8xl font-bold text-gray-800 mb-6 sm:mb-8"
            style={{ fontFamily: "'Dancing Script', cursive" }}
            variants={elementVariants}
          >
            Ceremonia
          </motion.h3>

          {/* Separador con corazón */}
          <motion.div
            className="flex items-center justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8"
            variants={elementVariants}
          >
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent to-pink-400"></div>
            <Heart className="h-5 w-5 sm:h-8 sm:w-8 text-pink-400 animate-pulse" />
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-l from-transparent to-pink-400"></div>
          </motion.div>

          {/* Texto */}
          <motion.p
            className="text-gray-600 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed px-4 italic"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            variants={elementVariants}
          >
            Te invito a acompañarme en este momento sagrado donde recibiré las bendiciones para mi nueva etapa de vida.
          </motion.p>
        </motion.div>

        {/* Tarjetas */}
        <motion.div
          className="bg-white/80 backdrop-blur-xl rounded-3xl sm:rounded-[2rem] p-8 sm:p-16 shadow-2xl border border-white/50 relative overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500"></div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
            {cards.map((card, i) => (
              <motion.div key={card.title} variants={cardVariants} className="group">
                <motion.div
                  className={`bg-gradient-to-br ${iconColors[i]} w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {card.icon}
                </motion.div>
                <h4
                  className="text-xl sm:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  {card.title}
                </h4>
                <p
                  className="text-gray-600 text-xl sm:text-2xl font-medium mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {card.subtitle}
                </p>
                <div
                  className={`text-gray-600 ${typeof card.detail === 'string' ? 'text-sm sm:text-lg' : ''}`}
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {card.detail}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mensaje final */}
          <motion.div
            className="text-center mt-12 sm:mt-16"
            variants={elementVariants}
          >
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-pink-100">
              <p
                className="text-gray-700 text-base sm:text-xl leading-relaxed italic"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                Que este día sea el inicio de una nueva etapa llena de bendiciones, sabiduría y amor. Tu presencia hará este momento aún más especial.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
