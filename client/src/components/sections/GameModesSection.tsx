import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function GameModesSection() {
  const gameModes = [
    {
      title: 'Survival Custom',
      status: 'Disponible',
      statusVariant: 'default' as const,
      image: '/japanese-lobby.jpg',
      description: 'Vive la experiencia Survival definitiva con mecánicas personalizadas y un mundo lleno de secretos por descubrir.',
      features: [
        { icon: '💰', text: 'Economía balanceada' },
        { icon: '📜', text: 'Misiones diarias' },
        { icon: '✨', text: 'Habilidades únicas' },
        { icon: '🎪', text: 'Eventos semanales' },
        { icon: '🏪', text: 'Tiendas de jugadores' },
        { icon: '🗺️', text: 'Mundo personalizado' },
      ],
    },
    {
      title: 'OneBlock',
      status: 'Disponible',
      statusVariant: 'default' as const,
      image: '/japanese-cabin.jpg',
      description: 'Comienza con un solo bloque y expande tu isla. Un desafío progresivo que pondrá a prueba tu creatividad y habilidades.',
      features: [
        { icon: '🏝️', text: 'Isla progresiva' },
        { icon: '👥', text: 'Modo multijugador' },
        { icon: '🏆', text: 'Sistema de ranking' },
        { icon: '🎁', text: 'Recompensas únicas' },
        { icon: '🌊', text: 'Fases dinámicas' },
        { icon: '🔄', text: 'Actualizaciones constantes' },
      ],
    },
    {
      title: 'Próximamente',
      status: 'En desarrollo',
      statusVariant: 'secondary' as const,
      image: '/japanese-temple.jpg',
      description: 'Estamos trabajando en nuevas modalidades emocionantes. ¡Mantente atento a nuestras redes sociales para más información!',
      features: [
        { icon: '🔮', text: 'Sorpresas por venir' },
        { icon: '🎮', text: 'Nuevas mecánicas' },
        { icon: '🌟', text: 'Contenido exclusivo' },
      ],
    },
  ];

  return (
    <section id="modalidades" className="py-20 bg-slate-950">
      <div className="container">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Modalidades de <span className="text-gradient">Juego</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elige tu aventura y sumérgete en experiencias únicas diseñadas para todos los estilos de juego
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {gameModes.map((mode, index) => (
            <Card 
              key={index}
              className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-japanese animate-in fade-in slide-in-from-bottom-5"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={mode.image}
                  alt={mode.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge 
                  variant={mode.statusVariant}
                  className="absolute top-4 right-4 text-sm"
                >
                  {mode.status}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl">{mode.title}</CardTitle>
                <CardDescription className="text-base">
                  {mode.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {mode.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 text-sm bg-white rounded-lg px-3 py-2 border"
                    >
                      <span className="text-lg">{feature.icon}</span>
                      <span className="text-muted-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

