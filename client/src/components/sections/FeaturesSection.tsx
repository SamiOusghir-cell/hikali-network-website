import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function FeaturesSection() {
  const features = [
    {
      icon: '🏯',
      title: 'Temática Japonesa',
      description: 'Explora un mundo inspirado en la cultura japonesa con construcciones únicas, decoraciones tradicionales y una atmósfera inmersiva que te transportará al país del sol naciente.',
    },
    {
      icon: '⚔️',
      title: 'Mecánicas Únicas',
      description: 'Disfruta de sistemas de juego personalizados, habilidades especiales, misiones épicas y eventos exclusivos que hacen de Hikali Network una experiencia única e inolvidable.',
    },
    {
      icon: '👥',
      title: 'Comunidad Activa',
      description: 'Únete a una comunidad amigable y activa de jugadores apasionados. Participa en eventos, forma equipos y haz nuevos amigos en un ambiente respetuoso y divertido.',
    },
  ];

  return (
    <section id="caracteristicas" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Por qué elegir <span className="text-gradient">Hikali Network</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre las características que hacen de nuestro servidor una experiencia única
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-japanese hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-5"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="text-6xl mb-4">{feature.icon}</div>
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

