'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-200 via-pink-100 to-purple-300 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_60%)]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-16 shadow-2xl border border-white/60">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-purple-300 to-pink-300 w-20 h-20 sm:w-28 sm:h-28 rounded-full flex items-center justify-center shadow-xl">
              <Sparkles className="h-10 w-10 text-purple-700" />
            </div>
          </div>

          <h4 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-6 italic" style={{ fontFamily: "'Dancing Script', cursive" }}>
            ¡Gracias Por Ser Parte De Mi Historia!
          </h4>

          <p className="text-gray-700 text-base sm:text-xl leading-relaxed mb-6 px-4 tracking-wide">
            Este día marca el inicio de una nueva etapa en mi vida.  
            No hay nada que me haga más feliz que compartirlo con vos.  
            Tu amistad y cariño son los regalos más valiosos que puedo recibir.
          </p>

          <div className="flex justify-center space-x-8 mb-10">
            <Heart className="h-10 w-10 sm:h-12 sm:w-12 text-purple-600 animate-pulse drop-shadow-md" />
            <Star className="h-10 w-10 sm:h-12 sm:w-12 text-pink-500 animate-pulse drop-shadow-md" style={{ animationDelay: '0.4s' }} />
            <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 text-purple-600 animate-pulse drop-shadow-md" style={{ animationDelay: '0.8s' }} />
          </div>

        

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mt-12 px-4 sm:px-10"
          >
            <p className="text-gray-800 text-base sm:text-xl font-medium leading-relaxed">
              Tu presencia en este día tan especial es lo más importante.  
              Pero si deseás dejarme algún presente, estará mi mesa de regalos.  
              También podés transferirme a mi cuenta.  
              Mi prioridad es que te diviertas y la pases bien.
            </p>
          </motion.div>
            <div className="mt-6 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-2xl p-6 shadow-md">
            <p className="text-white text-2xl font-semibold tracking-wider">
              valenmolina0
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
