import { InstrucoesColeta } from "@/components/instrucoes-coleta";
import { Trash2, Package, MapPin, Clock } from "lucide-react";

export default function ComumPage() {
  const passos = [
    {
      numero: 1,
      titulo: "Separe o material",
      icone: Trash2,
      descricao:
        "Separe o lixo orgânico (restos de comida, cascas, borra de café) e rejeitos não recicláveis (papel higiênico, fraldas, esponjas) dos materiais recicláveis.",
    },
    {
      numero: 2,
      titulo: "Embale adequadamente",
      icone: Package,
      descricao:
        "Coloque em sacos plásticos resistentes e bem fechados para evitar vazamentos, mau cheiro e a atração de animais. Sacos duplos são recomendados para lixo orgânico.",
    },
    {
      numero: 3,
      titulo: "Respeite os horários",
      icone: Clock,
      descricao:
        "Coloque o lixo na calçada no máximo 30 minutos antes do horário da coleta. Isso evita que animais rasguem os sacos e mantém a rua limpa.",
    },
    {
      numero: 4,
      titulo: "Deposite no local correto",
      icone: MapPin,
      descricao:
        "Coloque os sacos em frente à sua residência ou no contêiner mais próximo. Nunca descarte em terrenos baldios, rios ou calçadas de vizinhos.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <InstrucoesColeta
        titulo="Como realizar descarte de lixo comum"
        subtitulo="Descarte corretamente resíduos orgânicos e rejeitos não recicláveis, mantendo sua rua limpa e contribuindo para a saúde pública."
        passos={passos}
        corTema="green"
      />
    </div>
  );
}
