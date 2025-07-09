'use client'

import { motion } from 'framer-motion'
import { 
  Package, 
  Puzzle, 
  Search, 
  Brain, 
  Rocket, 
  BarChart3,
  ArrowRight 
} from 'lucide-react'

const services = [
  {
    icon: Package,
    title: 'NFT Drops',
    description: 'Запуск колекцій будь-якої складності',
    features: ['Смарт-контракти', 'Whitelist система', 'Розподіл доходів'],
    gradient: 'from-cyber-teal to-blue-500'
  },
  {
    icon: Puzzle,
    title: 'Token Engineering',
    description: 'Створення та аудит токеноміки',
    features: ['Економічна модель', 'Vesting графік', 'Механізми deflation'],
    gradient: 'from-cyber-purple to-pink-500'
  },
  {
    icon: Search,
    title: 'Smart Contract Audit',
    description: 'Перевірка безпеки',
    features: ['Автоматизований аналіз', 'Ручна перевірка', 'Звіт безпеки'],
    gradient: 'from-cyber-gold to-yellow-500'
  },
  {
    icon: Brain,
    title: 'Web3-консалтинг',
    description: 'Побудова архітектури проєкту',
    features: ['Технічна стратегія', 'Roadmap розробки', 'Інтеграції'],
    gradient: 'from-green-400 to-emerald-500'
  },
  {
    icon: Rocket,
    title: 'Launchpads',
    description: 'Підготовка до IDO/ICO',
    features: ['Marketing стратегія', 'Fundraising', 'Листинг підтримка'],
    gradient: 'from-red-400 to-orange-500'
  },
  {
    icon: BarChart3,
    title: 'Dashboard & DAO Tools',
    description: 'Створення керованих спільнот',
    features: ['Governance інструменти', 'Voting система', 'Treasury управління'],
    gradient: 'from-indigo-400 to-purple-500'
  }
]

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-graphite to-cyber-dark opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Що ми робимо</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Повний цикл розробки Web3 проєктів — від ідеї до успішного запуску
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass glow-border rounded-2xl p-8 h-full hover-glow hover-scale transition-all duration-300 cursor-pointer">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyber-teal transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-400">
                        <ArrowRight className="w-4 h-4 text-cyber-teal mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-teal/10 to-cyber-purple/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 px-8 py-4 glass glow-border rounded-full">
            <span className="text-gray-300">Не знайшли потрібну послугу?</span>
            <button className="text-cyber-teal hover:text-cyber-gold transition-colors font-semibold">
              Обговорити проєкт →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 