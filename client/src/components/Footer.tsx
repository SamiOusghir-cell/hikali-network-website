export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-pink-50 to-purple-50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">⛩️</span>
              <span className="text-2xl font-bold text-gradient">Hikali Network</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Servidor de Minecraft con temática japonesa. Explora un mundo único lleno de aventuras, 
              misiones y una comunidad activa.
            </p>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border">
              <span className="font-semibold text-primary">IP:</span>
              <code className="text-sm font-mono">play.hikali.es</code>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {['inicio', 'caracteristicas', 'modalidades', 'reportes', 'comunidad'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-muted-foreground hover:text-primary transition-colors capitalize"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Comunidad */}
          <div>
            <h3 className="font-bold mb-4">Comunidad</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://discord.gg/zTrny4rV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span>💬</span> Discord
                </a>
              </li>
              <li>
                <a
                  href="https://tienda.hikali.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span>🛒</span> Tienda
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2025 Hikali Network. Todos los derechos reservados.</p>
          <p className="mt-2">
            Minecraft es una marca registrada de Mojang AB. Este servidor no está afiliado con Mojang AB.
          </p>
        </div>
      </div>
    </footer>
  );
}

