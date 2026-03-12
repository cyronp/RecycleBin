import { InstrucoesColeta } from "@/components/instrucoes-coleta";
import { Droplets, FolderOpen, CalendarCheck, Sparkles } from "lucide-react";

export default function SeletivaPage() {
  const passos = [
    {
      numero: 1,
      titulo: "Limpe os materiais",
      icone: Droplets,
      descricao:
        "Enxágue embalagens e remova resíduos de comida. Não é preciso esfregar — uma passada rápida em água já é suficiente. Materiais sujos contaminam os recicláveis limpos.",
    },
    {
      numero: 2,
      titulo: "Separe por categoria",
      icone: FolderOpen,
      descricao:
        "Organize em quatro grupos: papel e papelão (azul), plástico (vermelho), vidro (verde) e metal (amarelo). Se possível, amasse latas e caixas para economizar espaço.",
    },
    {
      numero: 3,
      titulo: "Verifique se é reciclável",
      icone: Sparkles,
      descricao:
        "Nem todo material é reciclável. Papel carbono, adesivos, espelhos, cerâmica e isopor sujo geralmente não são aceitos. Na dúvida, consulte o ponto de coleta.",
    },
    {
      numero: 4,
      titulo: "Disponibilize para coleta",
      icone: CalendarCheck,
      descricao:
        "Coloque os recicláveis separados na calçada no dia e horário da coleta seletiva. Use sacolas transparentes ou caixas para facilitar a identificação pelo coletor.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <InstrucoesColeta
        titulo="Como realizar descarte de lixo reciclável"
        subtitulo="Reciclar corretamente reduz a poluição, economiza recursos naturais e gera renda para catadores. Veja como separar cada material da forma certa."
        passos={passos}
        corTema="blue"
      />
    </div>
  );
}
