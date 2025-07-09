'use client'

import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { PhilosophySection } from '@/components/sections/PhilosophySection'
import { CasesSection } from '@/components/sections/CasesSection'
import { PlatformSection } from '@/components/sections/PlatformSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { CustomCursor } from '@/components/ui/CustomCursor'

export default function Home() {
  return (
    <main className="relative bg-cyber-dark overflow-hidden">
      <CustomCursor />
      <Header />
      
      <div className="cyber-grid fixed inset-0 z-0 opacity-20" />
      
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <PhilosophySection />
        <CasesSection />
        <PlatformSection />
        <FaqSection />
        <ContactSection />
      </div>
      
      <Footer />
    </main>
  )
} 