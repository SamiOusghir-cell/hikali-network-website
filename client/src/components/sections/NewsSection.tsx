import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Sparkles, Megaphone } from 'lucide-react';

export default function NewsSection() {
  const news = [
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: '¡Nuevo Logo Implementado!',
      date: '2 de Octubre, 2025',
      category: 'Actualización',
      description: 'Estrenamos un nuevo logo que representa mejor la esencia de Hikali Network. Un diseño fresco y moderno que refleja nuestra identidad japonesa.',
      image: '/new-logo.webp',
      featured: true,
    },
    {
      icon: <Megaphone className="h-8 w-8 text-primary" />,
      title: 'Evento de Temporada',
      date: '15 de Septiembre, 2025',
      category: 'Evento',
      description: 'Participa en nuestro evento especial de otoño con recompensas exclusivas, desafíos únicos y premios increíbles para toda la comunidad.',
      featured: false,
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: 'Actualización OneBlock',
      date: '1 de Septiembre, 2025',
      category: 'Modalidad',
      description: 'Nuevas fases, bloques especiales y mecánicas mejoradas en OneBlock. ¡La experiencia más completa hasta ahora!',
      featured: false,
    },
  ];

  return (
    <section id="novedades" className="py-20 bg-white">
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
                item.featured ? 'border-primary/50 bg-gradient-to-br from-pink-50/50 to-purple-50/50' : 'hover:border-primary/30'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`grid ${item.featured && item.image ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-6`}>
                {/* Image - solo para featured */}
                {item.featured && item.image && (
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        // Si la imagen no carga, ocultar el contenedor
                        e.currentTarget.parentElement!.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    {item.featured && (
                      <Badge className="absolute top-4 left-4 bg-primary">
                        ✨ Destacado
                      </Badge>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className={item.featured && item.image ? '' : 'md:col-span-1'}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 p-3 bg-primary/10 rounded-lg">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <Badge variant="secondary">{item.category}</Badge>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {item.date}
                          </span>
                        </div>
                        <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {item.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </div>
              </div>
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

