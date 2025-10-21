import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Check, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const copyIP = async () => {
    try {
      await navigator.clipboard.writeText('play.hikali.es');
      setCopied(true);
      toast.success('¡IP copiada al portapapeles!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Error al copiar la IP');
    }
  };

  const scrollToNext = () => {
    const element = document.getElementById('caracteristicas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">🌸</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>🎋</div>
      <div className="absolute top-1/2 left-1/4 text-4xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>⛩️</div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Bienvenido a{' '}
              <span className="text-gradient block mt-2">Hikali Network</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Sumérgete en un servidor de Minecraft único con temática japonesa. 
              Explora mundos personalizados, completa misiones épicas y únete a una 
              comunidad activa y amigable.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="text-lg px-8 shadow-japanese"
                asChild
              >
                <a href="https://tienda.hikali.es" target="_blank" rel="noopener noreferrer">
                  🛒 Visitar Tienda
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8"
                asChild
              >
                <a href="https://discord.gg/zTrny4rV" target="_blank" rel="noopener noreferrer">
                  💬 Únete al Discord
                </a>
              </Button>
            </div>

            {/* IP Copy */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary/20 max-w-md mx-auto lg:mx-0">
              <p className="text-sm text-muted-foreground mb-2">IP del Servidor</p>
              <div className="flex items-center gap-3">
                <code className="text-2xl font-bold text-primary font-mono flex-1">
                  play.hikali.es
                </code>
                <Button
                  size="icon"
                  variant={copied ? "default" : "outline"}
                  onClick={copyIP}
                  className="shrink-0"
                >
                  {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-in fade-in slide-in-from-right-5 duration-700 delay-300">
            <div className="relative animate-float">
              <img
                src="/japanese-temple.jpg"
                alt="Templo japonés en Minecraft"
                className="rounded-2xl shadow-2xl w-full"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:text-primary transition-colors"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}

