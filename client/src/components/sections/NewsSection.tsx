import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Sparkles, Megaphone } from 'lucide-react';

export default function NewsSection() {
  const news = [
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: '¡Presentamos Nuestro Nuevo Logo!',
      date: '4 de Octubre, 2025',
      category: 'Actualización',
      description: 'Estamos emocionados de revelar la nueva imagen de Hikali Network. Este logo, inspirado en la estética japonesa y la vibrante comunidad de Minecraft, representa una nueva era de crecimiento y diversión en nuestro servidor. Cada detalle ha sido cuidadosamente diseñado para reflejar la pasión y la creatividad que nos une. ¡Esperamos que os guste tanto como a nosotros!',
      image: '/new-logo.webp',
      featured: true,
    },
  ];

  return (
    <section id="novedades" className="py-20 bg-slate-950">
      <div className="container">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Últimas <span className="text-gradient">Novedades</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mantente al día con las últimas actualizaciones, eventos y mejoras de Hikali Network
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {news.map((item, index) => (
            <Card 
              key={index}
              className={`overflow-hidden border-2 transition-all duration-300 hover:shadow-japanese animate-in fade-in slide-in-from-bottom-5 ${
                item.featured ? 'border-primary/50 bg-gradient-to-br from-gray-900 to-slate-900' : 'hover:border-primary/30 bg-gray-900'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Logo/Icon - más pequeño y a la izquierda */}
                  {item.featured && item.image ? (
                    <div className="shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 md:w-32 md:h-32 object-contain"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="shrink-0 p-4 bg-primary/10 rounded-lg">
                      {item.icon}
                    </div>
                  )}

                  {/* Content - a la derecha */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      {item.featured && (
                        <span className="text-2xl">✨</span>
                      )}
                      <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
                      {item.featured && (
                        <span className="text-2xl">✨</span>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center gap-3 text-sm">
                      <Badge variant="secondary" className="font-medium">
                        {item.category}
                      </Badge>
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Publicado el {item.date}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA para más novedades */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿Quieres estar al tanto de todas las novedades?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.gg/zTrny4rV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-japanese"
            >
              💬 Únete al Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

