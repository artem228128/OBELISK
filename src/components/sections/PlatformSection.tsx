'use client'

import { motion } from 'framer-motion'
import { 
  Layers, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Settings,
  ArrowRight,
  CheckCircle 
} from 'lucide-react'

const platformModules = [
  {
    icon: Layers,
    name: 'Obelisk Core',
    description: 'Центральна система управління та координації',
    features: ['Multi-chain підтримка', 'Автоматичне масштабування', 'Monitoring & Analytics'],
    color: 'cyber-teal'
  },
  {
    icon: Database,
    name: 'NFT Engine',
    description: 'Повний цикл створення та управління NFT',
    features: ['Metadata управління', 'Royalty система', 'Marketplace інтеграція'],
    color: 'cyber-purple'
  },
  {
    icon: Zap,
    name: 'Token Studio',
    description: 'Конструктор токенів та економічних моделей',
    features: ['Drag & Drop конструктор', 'Економічне моделювання', 'Vesting інструменти'],
    color: 'cyber-gold'
  },
  {
    icon: Shield,
    name: 'Security Layer',
    description: 'Комплексна система безпеки',
    features: ['Автоматичний аудит', 'Threat detection', 'Backup & Recovery'],
    color: 'red-500'
  },
  {
    icon: Globe,
    name: 'DAO Layer',
    description: 'Інструменти для децентралізованого управління',
    features: ['Voting механізми', 'Proposal система', 'Treasury управління'],
    color: 'green-500'
  },
  {
    icon: Settings,
    name: 'Integration Hub',
    description: 'API та інтеграції з зовнішніми сервісами',
    features: ['REST/GraphQL API', 'Webhook система', 'Third-party integrations'],
    color: 'blue-500'
  }
]

const benefits = [
  'Модульна архітектура — використовуйте окремо або разом',
  'Швидкий розгортання — від ідеї до запуску за тиждень',
  'Економія коштів — до 70% зниження витрат на розробку',
  'Професійна підтримка — 24/7 технічна допомога',
  'Регулярні оновлення — завжди актуальні технології'
]

export const PlatformSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-graphite via-cyber-dark to-cyber-graphite" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Платформа OBELISK</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Повна інфраструктура для Web3 проєктів з модульною архітектурою
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="relative">
            {/* Central Core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyber-teal to-cyber-purple p-8 animate-pulse-slow">
                <Layers className="w-full h-full text-white" />
              </div>
            </div>

            {/* Surrounding Modules */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-16">
              {platformModules.slice(1).map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass glow-border rounded-lg p-6 hover-glow hover-scale transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-lg bg-${module.color} p-3 mb-4`}>
                    <module.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{module.name}</h3>
                  <p className="text-gray-300 text-sm">{module.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Modules Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {platformModules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass glow-border rounded-2xl p-6 hover-glow hover-scale transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl bg-${module.color} p-4 mb-6`}>
                <module.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{module.name}</h3>
              <p className="text-gray-300 mb-4">{module.description}</p>
              
              <ul className="space-y-2">
                {module.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <CheckCircle className="w-4 h-4 text-cyber-teal mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Переваги платформи</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center text-left"
              >
                <ArrowRight className="w-5 h-5 text-cyber-teal mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="glass glow-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Готові побудувати свій обеліск?</h3>
            <p className="text-xl text-gray-300 mb-6">
              Зв'яжіться з нами для консультації та демонстрації платформи
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-cyber px-8 py-3 rounded-lg font-semibold hover-glow">
                Отримати демо
              </button>
              <button className="border border-cyber-teal text-cyber-teal px-8 py-3 rounded-lg font-semibold hover:bg-cyber-teal hover:text-black transition-colors">
                Документація
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 