'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MessageSquare, User, Code, ArrowRight } from 'lucide-react'

const projectTypes = [
  'NFT Collection',
  'DeFi Protocol',
  'Token Launch',
  'Smart Contract Audit',
  'DAO Platform',
  'Інше'
]

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: '',
    projectType: '',
    description: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark to-cyber-graphite" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="glass glow-border rounded-2xl p-12">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyber-teal to-cyber-purple p-4 mx-auto mb-6">
                <Send className="w-full h-full text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Дякуємо за заявку!</h2>
              <p className="text-xl text-gray-300 mb-6">
                Ми отримали вашу заявку та зв'яжемося з вами протягом 24 годин
              </p>
              <button 
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    name: '',
                    email: '',
                    telegram: '',
                    projectType: '',
                    description: ''
                  })
                }}
                className="text-cyber-teal hover:text-cyber-gold transition-colors"
              >
                Подати ще одну заявку
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark to-cyber-graphite" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Твій обеліск починається тут</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Готові перетворити вашу ідею на стабільний Web3 проєкт? Залишіть заявку та отримайте консультацію
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass glow-border rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Ім'я *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-cyber-graphite border border-cyber-teal/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyber-teal transition-colors"
                      placeholder="Ваше ім'я"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-cyber-graphite border border-cyber-teal/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyber-teal transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                {/* Telegram */}
                <div>
                  <label htmlFor="telegram" className="block text-sm font-medium text-gray-300 mb-2">
                    Telegram
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="telegram"
                      name="telegram"
                      value={formData.telegram}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-cyber-graphite border border-cyber-teal/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyber-teal transition-colors"
                      placeholder="@username"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                    Тип проєкту *
                  </label>
                  <div className="relative">
                    <Code className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-cyber-graphite border border-cyber-teal/30 rounded-lg text-white focus:outline-none focus:border-cyber-teal transition-colors appearance-none"
                    >
                      <option value="">Оберіть тип проєкту</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                    Короткий опис проєкту *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-cyber-graphite border border-cyber-teal/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyber-teal transition-colors resize-none"
                    placeholder="Розкажіть про вашу ідею, цілі та очікування..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-cyber py-4 rounded-lg font-semibold text-lg hover-glow flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner w-5 h-5" />
                      <span>Відправляємо...</span>
                    </>
                  ) : (
                    <>
                      <span>Отримати консультацію</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass glow-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Зв'яжіться з нами</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-cyber-teal/20 p-3 flex-shrink-0">
                    <Mail className="w-full h-full text-cyber-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">hello@obelisk.web3</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-cyber-teal/20 p-3 flex-shrink-0">
                    <MessageSquare className="w-full h-full text-cyber-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Telegram</h4>
                    <p className="text-gray-300">@obelisk_support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-cyber-teal/20 p-3 flex-shrink-0">
                    <MessageSquare className="w-full h-full text-cyber-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Discord</h4>
                    <p className="text-gray-300">discord.gg/obelisk</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass glow-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Що далі?</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-cyber-teal text-black flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <span className="text-gray-300">Аналіз вашого проєкту</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-cyber-teal text-black flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <span className="text-gray-300">Технічна консультація</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-cyber-teal text-black flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <span className="text-gray-300">Розробка стратегії</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-cyber-teal text-black flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <span className="text-gray-300">Запуск проєкту</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 