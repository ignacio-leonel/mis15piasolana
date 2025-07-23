import React from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const timeLeft = useCountdown('2025-08-08T20:00:00');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background with photo */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-indigo-900/40 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-fixed animate-pulse"
          style={{
            backgroundImage: "url('/images/valentina.jpeg')",
            animationDuration: '8s'
          }}
          initial={{ scale: 1.1, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 z-30 overflow-hidden">
        <motion.div
          className="absolute top-10 left-4 w-16 h-16 sm:top-20 sm:left-20 sm:w-32 sm:h-32 border-2 border-white/30 rounded-full animate-pulse"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
        <motion.div
          className="absolute top-20 right-8 w-12 h-12 sm:top-40 sm:right-32 sm:w-24 sm:h-24 border-2 border-white/30 rounded-full animate-pulse"
          animate={{ x: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-16 left-8 w-20 h-20 sm:bottom-32 sm:left-40 sm:w-40 sm:h-40 border-2 border-white/30 rounded-full animate-pulse"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, delay: 2 }}
        />
        <motion.div
          className="absolute bottom-10 right-4 w-14 h-14 sm:bottom-20 sm:right-20 sm:w-28 sm:h-28 border-2 border-white/30 rounded-full animate-pulse"
          animate={{ x: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
        />
      </div>
      
      <motion.div
        className="relative text-center z-40 px-4 max-w-6xl mx-auto py-8 text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <motion.div
          className="mb-6 sm:mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Sparkles className="h-8 w-8 sm:h-12 sm:w-12 text-purple-300 animate-bounce mx-auto mb-6 drop-shadow-lg" />
        </motion.div>
        
        <motion.h1
          className="text-2xl sm:text-4xl md:text-6xl font-light mb-4 sm:mb-6 tracking-wide drop-shadow-lg"
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, letterSpacing: '0.05em' }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Te invito a celebrar
        </motion.h1>
        
        <motion.div
          className="relative mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <motion.h2
            className="text-6xl sm:text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-purple-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent mb-4 leading-none italic drop-shadow-2xl"
            style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            Mis 15 años
          </motion.h2>
          <motion.div
            className="absolute -top-6 -right-6 sm:-top-12 sm:-right-12 md:-top-16 md:-right-16"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <div className="relative">
              <Star className="h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 text-yellow-300 animate-spin drop-shadow-lg" style={{ animationDuration: '10s' }} />
              <div className="absolute inset-0 bg-yellow-300/30 blur-2xl rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.h3
          className="text-4xl sm:text-6xl md:text-8xl font-bold text-purple-300 mb-8 sm:mb-12 italic drop-shadow-lg"
          style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Valentina
        </motion.h3>
        
        <motion.div
          className="mb-8 sm:mb-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <div className="w-40 sm:w-64 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-4 sm:mb-6"></div>
          <p
            className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed lowercase tracking-wide max-w-2xl mx-auto drop-shadow-lg"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontStyle: 'italic' }}
          >
            Un momento especial que quiero compartir contigo
          </p>
          <div className="w-40 sm:w-64 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mt-4 sm:mt-6"></div>
        </motion.div>
        
        {/* Modern countdown timer */}
        <motion.div
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/20 max-w-lg mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
        >
          <h4
            className="text-xl sm:text-2xl font-medium mb-6 sm:mb-8 lowercase tracking-wide drop-shadow-lg"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
          >
            faltan
          </h4>
          <div className="grid grid-cols-4 gap-4 sm:gap-8 text-center">
            <motion.div
              className="bg-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-sm border border-white/20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 2.6 }}
            >
              <div className="text-2xl sm:text-4xl font-bold text-purple-300 drop-shadow-lg" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>{timeLeft.days}</div>
              <div className="text-xs sm:text-sm text-white/80 lowercase mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>días</div>
            </motion.div>
            <motion.div
              className="bg-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-sm border border-white/20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 2.7 }}
            >
              <div className="text-2xl sm:text-4xl font-bold text-blue-300 drop-shadow-lg" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>{timeLeft.hours}</div>
              <div className="text-xs sm:text-sm text-white/80 lowercase mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>horas</div>
            </motion.div>
            <motion.div
              className="bg-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-sm border border-white/20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 2.8 }}
            >
              <div className="text-2xl sm:text-4xl font-bold text-indigo-300 drop-shadow-lg" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>{timeLeft.minutes}</div>
              <div className="text-xs sm:text-sm text-white/80 lowercase mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>min</div>
            </motion.div>
            <motion.div
              className="bg-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-sm border border-white/20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 2.9 }}
            >
              <div className="text-2xl sm:text-4xl font-bold text-purple-300 drop-shadow-lg" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>{timeLeft.seconds}</div>
              <div className="text-xs sm:text-sm text-white/80 lowercase mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>seg</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};