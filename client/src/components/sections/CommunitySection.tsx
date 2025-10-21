import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function CommunitySection() {
  const stats = [
    { icon: '👥', value: '500+', label: 'Miembros Activos' },
    { icon: '⏰', value: '24/7', label: 'Soporte' },
    { icon: '🎉', value: '100+', label: 'Eventos Realizados' },
  ];

  const discordChannels = [
    { icon: '📢', name: 'anuncios', color: 'text-yellow-600' },
    { icon: '💬', name: 'chat-general', color: 'text-blue-600' },
    { icon: '🎮', name: 'minecraft', color: 'text-green-600' },
    { icon: '🎪', name: 'eventos', color: 'text-purple-600' },
    { icon: '🛠️', name: 'soporte', color: 'text-red-600' },
  ];

  return (
    <section id="comunidad" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-6xl opacity-10 animate-float">🌸</div>
      <div className="absolute bottom-10 left-10 text-6xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>🎋</div>

      <div className="container relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Únete a nuestra <span className="text-gradient">Comunidad</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Forma parte de una comunidad apasionada, activa y amigable donde siempre encontrarás con quién jugar
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-japanese animate-in fade-in slide-in-from-bottom-5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Discord Preview */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 shadow-japanese overflow-hidden">
            <div className="bg-gradient-to-r from-primary/20 to-purple-500/20 p-6 border-b">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-lg">
                  ⛩️
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Hikali Network Discord</h3>
                  <p className="text-muted-foreground">Servidor oficial de la comunidad</p>
                </div>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Channels list */}
                <div>
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <span>📋</span> Canales Destacados
                  </h4>
                  <div className="space-y-2">
                    {discordChannels.map((channel, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <span className="text-xl">{channel.icon}</span>
                        <span className={`font-mono font-medium ${channel.color}`}>
                          #{channel.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Info and CTA */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-lg mb-3">¿Por qué unirte?</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Conoce a otros jugadores y forma equipos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Participa en eventos exclusivos con premios</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Recibe soporte rápido del equipo de staff</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Mantente al día con las últimas novedades</span>
                      </li>
                    </ul>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full mt-6 text-lg shadow-japanese"
                    asChild
                  >
                    <a href="https://discord.gg/zTrny4rV" target="_blank" rel="noopener noreferrer">
                      💬 Unirse al Discord
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

