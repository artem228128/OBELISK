'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Obelisk } from '@/components/3d/Obelisk'
import { useState, useEffect } from 'react'

export const HeroSection = () => {
  const [particles, setParticles] = useState<Array<{ x: number; y: number }>>([])

  useEffect(() => {
    // Generate particles only on client side
    setParticles(Array.from({ length: 20 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    })))
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-graphite to-cyber-dark opacity-80" />
      
      {/* 3D Obelisk Background */}
      <div className="absolute inset-0 z-0">
        <Obelisk />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyber-teal rounded-full opacity-30"
            initial={{
              x: particle.x,
              y: particle.y,
            }}
            animate={{
              y: [particle.y, particle.y - 100, particle.y],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 flex-1 flex flex-col justify-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full glass glow-border mx-auto"
          >
            <Sparkles className="w-4 h-4 text-cyber-teal mr-2" />
            <span className="text-sm font-medium text-cyber-teal">Хранители Web3</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Будуй обеліск.</span>
            <br />
            <span className="text-white">Вічний, прозорий,</span>
            <br />
            <span className="text-cyber-teal glow-text">Web3-ready.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Інфраструктура для криптопроєктів. NFT. Токеноміка. Аудит. Запуски.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          >
            <button
              onClick={scrollToContact}
              className="btn-cyber flex items-center space-x-2 px-8 py-4 rounded-lg font-semibold text-lg hover-glow group"
            >
              <span>Запустити проєкт</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="text-gray-300 hover:text-cyber-teal transition-colors duration-200 flex items-center space-x-2">
              <span>Дізнатися більше</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-cyber-teal/20"
          >
            {[
              { value: '100+', label: 'Проєктів запущено' },
              { value: '50M+', label: 'Долари залучено' },
              { value: '24/7', label: 'Підтримка' },
              { value: '99.9%', label: 'Надійність' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyber-teal mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="pb-8"
        >
          <div className="flex flex-col items-center space-y-2 text-gray-400">
            <span className="text-xs">Прокрутіть вниз</span>
            <div className="w-6 h-10 border-2 border-cyber-teal rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyber-teal rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 