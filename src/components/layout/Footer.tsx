'use client'

import { motion } from 'framer-motion'
import { Hexagon, Mail, MessageSquare, Twitter, Github } from 'lucide-react'

export const Footer = () => {
  const navigation = [
    { name: 'Головна', href: '#home' },
    { name: 'Послуги', href: '#services' },
    { name: 'Кейси', href: '#cases' },
    { name: 'Контакти', href: '#contact' },
  ]

  const socialLinks = [
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/obelisk_web3', 
      icon: Twitter,
      color: 'hover:text-blue-400' 
    },
    { 
      name: 'Telegram', 
      href: 'https://t.me/obelisk_support', 
      icon: MessageSquare,
      color: 'hover:text-cyber-teal' 
    },
    { 
      name: 'Discord', 
      href: 'https://discord.gg/obelisk', 
      icon: MessageSquare,
      color: 'hover:text-indigo-400' 
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/obelisk-web3', 
      icon: Github,
      color: 'hover:text-gray-300' 
    }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-cyber-dark border-t border-cyber-teal/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="cyber-grid" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyber-teal to-cyber-purple p-2">
                <Hexagon className="w-full h-full text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">OBELISK</span>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              Хранители Web3. Створюємо неруйнівні структури для децентралізованого майбутнього.
            </p>
            <div className="flex items-center space-x-4">
              <Mail className="w-5 h-5 text-cyber-teal" />
              <span className="text-gray-300">hello@obelisk.web3</span>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Навігація</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-cyber-teal transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Соцмережі</h3>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 text-gray-300 ${link.color} transition-colors duration-200`}
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-cyber-teal/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm mb-2">
                © 2025 OBELISK — збудовано на Web3. Працює поза часом.
              </p>
              <p className="text-gray-400 text-xs">
                Усі права захищено. Ліцензія MIT для відкритих компонентів.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-cyber-teal transition-colors text-sm"
              >
                Політика конфіденційності
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyber-teal transition-colors text-sm"
              >
                Умови використання
              </a>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-teal to-transparent opacity-50" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyber-teal rounded-full opacity-20"
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 2,
              }}
              style={{
                left: `${20 + i * 30}%`,
                top: `${50 + i * 10}%`,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  )
} 