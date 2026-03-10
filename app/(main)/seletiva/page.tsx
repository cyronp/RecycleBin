import { InstrucoesColeta } from "@/components/instrucoes-coleta";

export default function SeletivaPage() {
  const passos = [
    {
      numero: 1,
      titulo: "Limpe os materiais",
      descricao:
        "Lave embalagens e remova resíduos orgânicos antes de separar para reciclagem.",
      // imagemUrl: "/images/seletiva-passo1.gif"
    },
    {
      numero: 2,
      titulo: "Separe por categoria",
      descricao:
        "Organize em grupos: papel, plástico, vidro e metal para facilitar a coleta seletiva.",
      // imagemUrl: "/images/seletiva-passo2.gif"
    },
    {
      numero: 3,
      titulo: "Disponibilize para coleta",
      descricao:
        "Coloque os materiais recicláveis no dia e horário da coleta seletiva.",
      // imagemUrl: "/images/seletiva-passo3.gif"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <InstrucoesColeta
        titulo="Como realizar descarte de lixo reciclável"
        passos={passos}
      />
    </div>
  );
}
