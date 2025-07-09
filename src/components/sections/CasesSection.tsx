'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react'

const cases = [
  {
    id: 1,
    title: 'CryptoBeasts NFT',
    category: 'NFT Collection',
    description: 'Колекція з 10,000 унікальних NFT з геймінг механіками',
    image: '/api/placeholder/400/300',
    stats: {
      volume: '$2.3M',
      holders: '8,500',
      roi: '340%'
    },
    details: {
      challenge: 'Створити NFT колекцію з унікальними утилітами та геймінг механіками',
      solution: 'Розроблена система стейкінга, P2E елементи та cross-chain підтримка',
      results: [
        'Sold out за 24 години',
        'Топ-3 в OpenSea категорії',
        'Активна спільнота 15k+ користувачів',
        'Впровадження в 5 геймінг платформ'
      ]
    },
    tech: ['Ethereum', 'Solidity', 'IPFS', 'Chainlink'],
    gradient: 'from-cyan-400 to-blue-600'
  },
  {
    id: 2,
    title: 'DeForest Protocol',
    category: 'DeFi Platform',
    description: 'Децентралізована платформа для сталого фінансування',
    image: '/api/placeholder/400/300',
    stats: {
      volume: '$15M',
      holders: '12,000',
      roi: '580%'
    },
    details: {
      challenge: 'Створити DeFi протокол з фокусом на екологічну стійкість',
      solution: 'Реалізація carbon credit токенів та green farming механізмів',
      results: [
        'TVL $15M за перший місяць',
        'Партнерство з 3 екологічними фондами',
        'Зменшення carbon footprint на 40%',
        'Інтеграція з 8 DEX платформами'
      ]
    },
    tech: ['Polygon', 'Solidity', 'The Graph', 'Chainlink'],
    gradient: 'from-green-400 to-emerald-600'
  },
  {
    id: 3,
    title: 'MetaGovernance DAO',
    category: 'DAO Infrastructure',
    description: 'Платформа для створення та управління DAO',
    image: '/api/placeholder/400/300',
    stats: {
      volume: '$8.7M',
      holders: '25,000',
      roi: '420%'
    },
    details: {
      challenge: 'Створити user-friendly інтерфейс для DAO управління',
      solution: 'Розроблена модульна система з drag-and-drop конструктором',
      results: [
        '150+ DAO створено на платформі',
        'Більше 500k+ голосів проведено',
        'Інтеграція з 10+ блокчейн мережами',
        'Середній engagement rate 78%'
      ]
    },
    tech: ['Multi-chain', 'Solidity', 'React', 'IPFS'],
    gradient: 'from-purple-400 to-pink-600'
  }
]

export const CasesSection = () => {
  const [selectedCase, setSelectedCase] = useState<typeof cases[0] | null>(null)

  return (
    <section id="cases" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-graphite to-cyber-dark" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Наші кейси</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Успішні проєкти, які змінили галузь та принесли результат
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedCase(caseItem)}
            >
              <div className="glass glow-border rounded-2xl overflow-hidden hover-glow hover-scale transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-cyber-teal to-cyber-purple overflow-hidden">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                      {caseItem.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/20">
                      {caseItem.title.slice(0, 2)}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-teal transition-colors">
                    {caseItem.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {caseItem.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyber-teal">
                        {caseItem.stats.volume}
                      </div>
                      <div className="text-xs text-gray-400">Volume</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyber-teal">
                        {caseItem.stats.holders}
                      </div>
                      <div className="text-xs text-gray-400">Holders</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyber-teal">
                        {caseItem.stats.roi}
                      </div>
                      <div className="text-xs text-gray-400">ROI</div>
                    </div>
                  </div>

                  {/* View Details */}
                  <div className="flex items-center text-cyber-teal group-hover:text-cyber-gold transition-colors">
                    <span className="text-sm font-medium">Детальніше</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-cyber-dark border border-cyber-teal/30 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedCase.title}
                  </h3>
                  <span className="px-3 py-1 bg-cyber-teal/20 text-cyber-teal rounded-full text-sm">
                    {selectedCase.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center glass rounded-lg p-4">
                  <DollarSign className="w-8 h-8 text-cyber-teal mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{selectedCase.stats.volume}</div>
                  <div className="text-gray-400">Trading Volume</div>
                </div>
                <div className="text-center glass rounded-lg p-4">
                  <Users className="w-8 h-8 text-cyber-teal mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{selectedCase.stats.holders}</div>
                  <div className="text-gray-400">Community</div>
                </div>
                <div className="text-center glass rounded-lg p-4">
                  <TrendingUp className="w-8 h-8 text-cyber-teal mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{selectedCase.stats.roi}</div>
                  <div className="text-gray-400">ROI</div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-cyber-teal mb-3">Виклик</h4>
                  <p className="text-gray-300">{selectedCase.details.challenge}</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-cyber-teal mb-3">Рішення</h4>
                  <p className="text-gray-300">{selectedCase.details.solution}</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-cyber-teal mb-3">Результати</h4>
                  <ul className="space-y-2">
                    {selectedCase.details.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyber-teal rounded-full mr-3" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-cyber-teal mb-3">Технології</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCase.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-cyber-graphite text-cyber-teal rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
} 