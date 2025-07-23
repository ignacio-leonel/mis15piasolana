import React from 'react';
import { Church, Calendar, Clock, MapPin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChurchSectionProps {
  show: boolean;
}

const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 1.4 + i * 0.4, duration: 0.8 }
  })
};

export const ChurchSection: React.FC<ChurchSectionProps> = ({ show }) => {
  if (!show) return null;

  return (
    <motion.section
      className="py-16 sm:py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 to-blue-100/30"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="inline-block relative mb-8 sm:mb-12">
            <motion.div
              className="bg-gradient-to-br from-purple-100 to-blue-100 w-20 h-20 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto shadow-xl"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Church className="h-10 w-10 sm:h-16 sm:w-16 text-purple-600" />
            </motion.div>
            <motion.div
              className="absolute -inset-8 bg-purple-200/30 rounded-full -z-10 animate-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          
          <motion.h3
            className="text-4xl sm:text-7xl md:text-8xl font-bold text-gray-800 mb-6 sm:mb-8 italic lowercase"
            style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {capitalize('ceremonia religiosa')}
          </motion.h3>
          
          <motion.div
            className="flex items-center justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent to-purple-400"></div>
            <Heart className="h-5 w-5 sm:h-8 sm:w-8 text-purple-400" />
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-l from-transparent to-purple-400"></div>
          </motion.div>
          
          <motion.p
            className="text-gray-600 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed lowercase tracking-wide px-4"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontStyle: 'italic' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {capitalize('te invito a acompañarme en este momento sagrado donde recibiré las bendiciones para mi nueva etapa de vida')}
          </motion.p>
        </motion.div>
        
        <motion.div
          className="bg-white/80 backdrop-blur-xl rounded-3xl sm:rounded-[2rem] p-8 sm:p-16 shadow-2xl border border-white/50 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
            {[
              {
                icon: <Calendar className="h-12 w-12 sm:h-16 sm:w-16 text-purple-600" />,
                title: "fecha",
                subtitle: "Viernes",
                detail: "8 de Agosto, 2025"
              },
              {
                icon: <Clock className="h-12 w-12 sm:h-16 sm:w-16 text-purple-600" />,
                title: "hora",
                subtitle: "20:00 pm",
                detail: "Puntualidad por favor"
              },
              {
                icon: <MapPin className="h-12 w-12 sm:h-16 sm:w-16 text-purple-600" />,
                title: "lugar",
                subtitle: "Iglesia San José",
                detail: "Calle principal #123\nCentro de la ciudad"
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
                  className="bg-gradient-to-br from-purple-100 to-blue-100 w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-all duration-500 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  {card.icon}
                </motion.div>
                <h4
                  className="text-xl sm:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4 italic lowercase"
                  style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
                >
                  {capitalize(card.title)}
                </h4>
                <p
                  className="text-gray-600 text-xl sm:text-2xl font-medium mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                >
                  {capitalize(card.subtitle)}
                </p>
                {card.title === "lugar" ? (
                  card.detail.split('\n').map((line, idx) => (
                    <p
                      key={idx}
                      className="text-gray-600 text-xs sm:text-sm lowercase"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                    >
                      {capitalize(line)}
                    </p>
                  ))
                ) : (
                  <p
                    className={`text-gray-600 ${card.title === "hora" ? "text-xs sm:text-sm" : "text-sm sm:text-lg"} lowercase`}
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                  >
                    {capitalize(card.detail)}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="text-center mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-purple-100">
              <p
                className="text-gray-700 text-base sm:text-xl leading-relaxed italic lowercase tracking-wide"
                style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 400 }}
              >
                {capitalize('que este día sea el inicio de una nueva etapa llena de bendiciones, sabiduría y amor. tu presencia hará este momento aún más especial.')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};