'use client'

import { motion } from 'framer-motion'
import { Shield, Code, Clock } from 'lucide-react'

const philosophyPoints = [
  {
    icon: Shield,
    title: 'Стабільність понад хайп',
    description: 'Ми не гонимось за хайпом. Ми створюємо структури, які переживуть мережу.',
    quote: '"Справжня цінність в довготривалості, а не в швидкому прибутку"'
  },
  {
    icon: Code,
    title: 'Код понад маркетинг',
    description: 'Ми поважаємо код, а не маркетинг. Технологія говорить сама за себе.',
    quote: '"Кожен рядок коду — це відповідальність перед майбутнім"'
  },
  {
    icon: Clock,
    title: 'Вічність в децентралізації',
    description: 'Обеліск — це знак стабільності в децентралізованому світі.',
    quote: '"Побудувати щось, що працюватиме поза часом і простором"'
  }
]

export const PhilosophySection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-graphite to-cyber-dark" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Філософія OBELISK</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Наші принципи формують підхід до кожного проєкту
          </p>
        </motion.div>

        {/* Philosophy Points */}
        <div className="space-y-20">
          {philosophyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Icon and Visual */}
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyber-teal to-cyber-purple p-8 animate-pulse-slow">
                    <point.icon className="w-full h-full text-white" />
                  </div>
                  <div className="absolute inset-0 w-32 h-32 rounded-full border-2 border-cyber-teal animate-ping opacity-30" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold text-white"
                >
                  {point.title}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl text-gray-300 leading-relaxed"
                >
                  {point.description}
                </motion.p>

                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="relative"
                >
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyber-teal to-cyber-purple" />
                  <p className="text-lg italic text-cyber-gold pl-6">
                    {point.quote}
                  </p>
                </motion.blockquote>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="glass glow-border rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Наша місія
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Створити технологічну основу для нового інтернету — надійну, прозору і доступну для всіх.
              Кожен проєкт, який ми створюємо, стає частиною вічної інфраструктури Web3.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-cyber-teal rounded-full animate-ping opacity-50" />
      <div className="absolute top-3/4 right-10 w-3 h-3 bg-cyber-purple rounded-full animate-ping opacity-30" />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyber-gold rounded-full animate-ping opacity-40" />
    </section>
  )
} 