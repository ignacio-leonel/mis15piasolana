import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const timeLeft = useCountdown('2025-10-04T22:00:00');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo animado con foto */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-pink-200/40 via-pink-300/40 to-rose-200/40 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-fixed animate-pulse"
          style={{
            backgroundImage: "url('/images/pia2.jpg')",
            animationDuration: '4s'
          }}
          initial={{ scale: 1.1, opacity: 0.3 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
      </div>
      
      
      
      <motion.div
        className="relative text-center z-40 px-4 max-w-6xl mx-auto py-8 text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        
        
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
            className="text-6xl sm:text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-pink-300 via-rose-300 to-pink-400 bg-clip-text text-transparent mb-4 leading-none italic drop-shadow-2xl"
            style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
          >
            Mis 15 años
          </motion.h2>
          <motion.div
            className="absolute -top-6 -right-6 sm:-top-12 sm:-right-12 md:-top-16 md:-right-16"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
           
          </motion.div>
        </motion.div>
        
        <motion.h3
          className="text-4xl sm:text-6xl md:text-8xl font-bold text-pink-300 mb-8 sm:mb-12 italic drop-shadow-lg"
          style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
        >
          Pía Solana
        </motion.h3>
        
        <motion.div
          className="mb-8 sm:mb-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <div className="w-40 sm:w-64 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-4 sm:mb-6"></div>
          <p
            className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed tracking-wide max-w-2xl mx-auto drop-shadow-lg"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontStyle: 'italic' }}
          >
            Un momento especial que quiero compartir contigo
          </p>
          <div className="w-40 sm:w-64 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mt-4 sm:mt-6"></div>
        </motion.div>
        
        {/* Countdown */}
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
            Faltan
          </h4>
          <div className="grid grid-cols-4 gap-4 sm:gap-8 text-center">
            <motion.div
              className="bg-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-sm border border-white/20"
            >
              <div className="text-2xl sm:text-4xl font-bold text-white drop-shadow-lg">{timeLeft.days}</div>
              <div className="text-xs sm:text-sm text-white/80 lowercase mt-1">días</div>
            </motion.div>
            <motion.div
              className="bg-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-sm border border-white/20"
            >
              <div className="text-2xl sm:text-4xl font-bold text-white drop-shadow-lg">{timeLeft.hours}</div>
              <div className="text-xs sm:text-sm text-white/80 lowercase mt-1">horas</div>
            </motion.div>
            <motion.div
              className="bg-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-sm border border-white/20"
            >
              <div className="text-2xl sm:text-4xl font-bold text-white drop-shadow-lg">{timeLeft.minutes}</div>
              <div className="text-xs sm:text-sm text-white/80 lowercase mt-1">min</div>
            </motion.div>
            <motion.div
              className="bg-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-sm border border-white/20"
            >
              <div className="text-2xl sm:text-4xl font-bold text-white drop-shadow-lg">{timeLeft.seconds}</div>
              <div className="text-xs sm:text-sm text-white/80 lowercase mt-1">seg</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
