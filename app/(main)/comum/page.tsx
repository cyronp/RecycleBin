import { InstrucoesColeta } from "@/components/instrucoes-coleta";

export default function ComumPage() {
  const passos = [
    {
      numero: 1,
      titulo: "Separe o material",
      descricao:
        "Separe o lixo orgânico e rejeitos não recicláveis dos materiais recicláveis.",
      // imagemUrl: "/images/comum-passo1.gif"
    },
    {
      numero: 2,
      titulo: "Embale adequadamente",
      descricao:
        "Coloque em sacos plásticos fechados para evitar vazamentos e mau cheiro.",
      // imagemUrl: "/images/comum-passo2.gif"
    },
    {
      numero: 3,
      titulo: "Deposite no local correto",
      descricao:
        "Coloque o material para coleta no horário estabelecido pela prefeitura.",
      // imagemUrl: "/images/comum-passo3.gif"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <InstrucoesColeta
        titulo="Como realizar descarte de lixo comum"
        passos={passos}
      />
    </div>
  );
}
