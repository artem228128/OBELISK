'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'Як працює аудит смарт-контрактів?',
    answer: 'Наш процес аудиту включає три етапи: автоматизований аналіз коду за допомогою власних інструментів, ручну перевірку досвідченими аудиторами, та фінальну перевірку з повним звітом. Ми перевіряємо безпеку, оптимізацію газу, відповідність стандартам та потенційні уразливості.'
  },
  {
    question: 'Який технологічний стек використовується?',
    answer: 'Ми працюємо з усіма основними блокчейн мережами: Ethereum, Polygon, Binance Smart Chain, Arbitrum, Optimism. Використовуємо Solidity для смарт-контрактів, Node.js та Python для backend, React/Next.js для frontend, та IPFS для децентралізованого зберігання.'
  },
  {
    question: 'Чи можна інтегрувати з OpenSea/Blur/Polygon?',
    answer: 'Так, ми забезпечуємо повну інтеграцію з усіма основними NFT marketplace: OpenSea, Blur, LooksRare, X2Y2, та іншими. Також підтримуємо інтеграцію з DeFi протоколами, cross-chain мостами, та wallet провайдерами.'
  },
  {
    question: 'Які країни ви підтримуєте?',
    answer: 'Ми працюємо з клієнтами по всьому світу, включаючи Україну, США, Європу, Азію. Маємо досвід роботи з різними юрисдикціями та можемо допомогти з compliance вимогами для кожної країни.'
  },
  {
    question: 'Скільки коштує розробка проєкту?',
    answer: 'Вартість залежить від складності проєкту. NFT колекція від $5,000, DeFi протокол від $15,000, повноцінна платформа від $25,000. Ми завжди даємо детальну оцінку після аналізу ваших потреб та можемо запропонувати різні варіанти бюджету.'
  },
  {
    question: 'Яку підтримку ви надаєте після запуску?',
    answer: 'Ми надаємо 24/7 технічну підтримку, регулярні оновлення системи, моніторинг безпеки, та консультації з розвитку проєкту. Також доступні додаткові послуги: маркетинг, community management, та листинг на exchanges.'
  },
  {
    question: 'Як швидко можна запустити проєкт?',
    answer: 'Стандартний NFT проєкт — 2-3 тижні, DeFi протокол — 4-6 тижнів, складна платформа — 8-12 тижнів. Ми можемо прискорити розробку за допомогою нашої модульної платформи OBELISK, що скорочує час на 40-60%.'
  },
  {
    question: 'Чи надаєте навчання команді?',
    answer: 'Так, ми проводимо детальне навчання вашої команди по роботі з платформою, включаючи технічну документацію, відеоуроки, та персональні консультації. Також надаємо постійну підтримку для технічних питань.'
  }
]

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark to-cyber-graphite" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Часті запитання</span>
          </h2>
          <p className="text-xl text-gray-300">
            Відповіді на найпоширеніші запитання про наші послуги
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass glow-border rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-cyber-teal/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-cyber-teal" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-cyber-teal" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-cyber-teal/20 pt-4">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass glow-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Не знайшли відповідь на своє запитання?
            </h3>
            <p className="text-gray-300 mb-6">
              Зв'яжіться з нами для персональної консультації
            </p>
            <button className="btn-cyber px-8 py-3 rounded-lg font-semibold hover-glow">
              Задати питання
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 