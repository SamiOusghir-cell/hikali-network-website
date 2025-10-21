import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

export default function ReportsSection() {
  const [formData, setFormData] = useState({
    type: '',
    minecraftName: '',
    discordName: '',
    description: '',
    evidence: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reportTypes = [
    {
      icon: '👤',
      value: 'jugador',
      title: 'Reportar Jugador',
      description: 'Comportamientos inadecuados, trampas o toxicidad',
    },
    {
      icon: '🐛',
      value: 'bug',
      title: 'Reportar Bug',
      description: 'Errores técnicos o problemas del servidor',
    },
    {
      icon: '📋',
      value: 'otro',
      title: 'Otros Reportes',
      description: 'Sugerencias, dudas o problemas generales',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validaciones
    if (!formData.type) {
      toast.error('Por favor selecciona un tipo de reporte');
      return;
    }
    if (!formData.minecraftName.trim()) {
      toast.error('Por favor ingresa tu nombre de Minecraft');
      return;
    }
    if (!formData.discordName.trim()) {
      toast.error('Por favor ingresa tu nombre de Discord');
      return;
    }
    if (formData.description.trim().length < 20) {
      toast.error('La descripción debe tener al menos 20 caracteres');
      return;
    }

    setIsSubmitting(true);

    try {
      // Guardar en localStorage como respaldo
      const reports = JSON.parse(localStorage.getItem('hikali_reports') || '[]');
      reports.push({
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('hikali_reports', JSON.stringify(reports));

      // Simular envío
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast.success('¡Reporte enviado exitosamente! Nuestro equipo lo revisará pronto.');
      
      // Limpiar formulario
      setFormData({
        type: '',
        minecraftName: '',
        discordName: '',
        description: '',
        evidence: '',
      });
    } catch (error) {
      toast.error('Error al enviar el reporte. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reportes" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Centro de <span className="text-gradient">Reportes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tu ayuda es fundamental para mantener Hikali Network como un lugar seguro y divertido para todos
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Tipos de reportes */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {reportTypes.map((type, index) => (
              <Card 
                key={type.value}
                className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-japanese animate-in fade-in slide-in-from-bottom-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="text-5xl mb-2">{type.icon}</div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Formulario */}
          <Card className="border-2 shadow-japanese">
            <CardHeader>
              <CardTitle className="text-2xl">Enviar Reporte</CardTitle>
              <CardDescription>
                Completa el formulario con la mayor cantidad de detalles posible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Tipo de reporte */}
                <div className="space-y-2">
                  <Label htmlFor="type">Tipo de Reporte *</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) => setFormData({ ...formData, type: value })}
                  >
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Selecciona el tipo de reporte" />
                    </SelectTrigger>
                    <SelectContent>
                      {reportTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.icon} {type.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Nombre de Minecraft */}
                <div className="space-y-2">
                  <Label htmlFor="minecraftName">Tu Nombre de Minecraft *</Label>
                  <Input
                    id="minecraftName"
                    placeholder="Ej: Steve123"
                    value={formData.minecraftName}
                    onChange={(e) => setFormData({ ...formData, minecraftName: e.target.value })}
                  />
                </div>

                {/* Nombre de Discord */}
                <div className="space-y-2">
                  <Label htmlFor="discordName">Tu Nombre de Discord *</Label>
                  <Input
                    id="discordName"
                    placeholder="Ej: usuario#1234"
                    value={formData.discordName}
                    onChange={(e) => setFormData({ ...formData, discordName: e.target.value })}
                  />
                </div>

                {/* Descripción */}
                <div className="space-y-2">
                  <Label htmlFor="description">Descripción del Problema *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe detalladamente lo que sucedió... (mínimo 20 caracteres)"
                    rows={5}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                  <p className="text-sm text-muted-foreground">
                    {formData.description.length} / 20 caracteres mínimos
                  </p>
                </div>

                {/* Evidencia */}
                <div className="space-y-2">
                  <Label htmlFor="evidence">Evidencia (Opcional)</Label>
                  <Input
                    id="evidence"
                    placeholder="URL de imágenes o videos (Imgur, YouTube, etc.)"
                    value={formData.evidence}
                    onChange={(e) => setFormData({ ...formData, evidence: e.target.value })}
                  />
                </div>

                {/* Submit button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    '📤 Enviar Reporte'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

