import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import GameModesSection from '@/components/sections/GameModesSection';
import NewsSection from '@/components/sections/NewsSection';
import CommunitySection from '@/components/sections/CommunitySection';
import { useKonamiCode } from '@/hooks/useKonamiCode';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [sakuraPetals, setSakuraPetals] = useState(false);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Konami code easter egg
  useKonamiCode(() => {
    toast.success('🌸 ¡Código Konami activado! Pétalos de sakura cayendo 🌸');
    setSakuraPetals(true);
    
    // Create sakura petals
    const petalsContainer = document.createElement('div');
    petalsContainer.id = 'sakura-petals';
    document.body.appendChild(petalsContainer);

    for (let i = 0; i < 30; i++) {
      const petal = document.createElement('div');
      petal.className = 'sakura-petal';
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.animationDuration = `${5 + Math.random() * 5}s`;
      petal.style.animationDelay = `${Math.random() * 3}s`;
      petalsContainer.appendChild(petal);
    }

    // Remove after 15 seconds
    setTimeout(() => {
      petalsContainer.remove();
      setSakuraPetals(false);
    }, 15000);
  });

  // Console messages
  useEffect(() => {
    console.log('%c🌸 Hikali Network 🌸', 'color: #FF69B4; font-size: 24px; font-weight: bold;');
    console.log('%c¡Bienvenido a nuestro servidor!', 'color: #FFB7C5; font-size: 16px;');
    console.log('%cIP: play.hikali.es', 'color: #DC143C; font-size: 14px; font-weight: bold;');
    console.log('%c💡 Tip: Intenta el código Konami...', 'color: #4B0082; font-size: 12px; font-style: italic;');
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <GameModesSection />
        <NewsSection />
        <CommunitySection />
      </main>

      <Footer />

      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          size="icon"
          className="fixed bottom-8 right-8 rounded-full shadow-japanese z-40 animate-in fade-in slide-in-from-bottom-5"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}

