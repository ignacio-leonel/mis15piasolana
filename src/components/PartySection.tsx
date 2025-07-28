import React from 'react';
import { Home, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface PartySectionProps {
  show: boolean;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 1.2 + i * 0.3, duration: 0.7 }
  })
};

const iconColors = [
  'from-purple-200 to-indigo-300',
  'from-purple-200 to-indigo-300',
  'from-purple-200 to-indigo-300'
];

export const PartySection: React.FC<PartySectionProps> = ({ show }) => {
  if (!show) return null;

  return (
    <motion.section
      className="py-16 sm:py-24 bg-gradient-to-br from-purple-50 via-purple-100 to-indigo-50 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Fondo blur tenue lila */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-4 w-32 h-32 sm:top-20 sm:left-20 sm:w-64 sm:h-64 bg-purple-300 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-4 w-32 h-32 sm:bottom-20 sm:right-20 sm:w-64 sm:h-64 bg-indigo-300 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="inline-block relative mb-8 sm:mb-12">
            <motion.div
              className="bg-gradient-to-br from-purple-200 to-indigo-300 w-20 h-20 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Home className="h-10 w-10 sm:h-16 sm:w-16 text-indigo-700" />
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            celebración & fiesta
          </motion.h3>

          <motion.div
            className="flex items-center justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent to-purple-400"></div>
            <Sparkles className="h-5 w-5 sm:h-8 sm:w-8 text-purple-400" />
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-l from-transparent to-purple-400"></div>
          </motion.div>

          <motion.p
            className="text-gray-600 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed lowercase tracking-wide px-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            después de la ceremonia, continuemos la celebración con una noche llena de alegría, música y momentos inolvidables
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-white/80 backdrop-blur-xl rounded-3xl sm:rounded-[2rem] p-8 sm:p-16 shadow-2xl border border-white/50 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-700"></div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
            {[
              {
                icon: <Calendar className="h-12 w-12 sm:h-16 sm:w-16 text-indigo-700" />,
                title: 'Fecha',
                subtitle: 'sábado',
                detail: '8 de agosto, 2025'
              },
              {
                icon: <Clock className="h-12 w-12 sm:h-16 sm:w-16 text-indigo-700" />,
                title: 'Hora',
                subtitle: '8:00 pm',
                detail: 'después de la ceremonia'
              },
              {
                icon: <MapPin className="h-12 w-12 sm:h-16 sm:w-16 text-indigo-700" />,
                title: 'Lugar',
                subtitle: 'Juan Manuel de Rosas y 17 de Agosto',
                detail: 'Tucumán'
              }
            ].map((card, i) => (
              <motion.div
                className="group"
                key={card.title}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <motion.div
                  className={`bg-gradient-to-br ${iconColors[i]} w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-all duration-500 shadow-lg`}
                  whileHover={{ scale: 1.1 }}
                >
                  {card.icon}
                </motion.div>
                <h4
                  className="text-xl sm:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4 italic"
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
        </motion.div>
      </div>
    </motion.section>
  );
};
