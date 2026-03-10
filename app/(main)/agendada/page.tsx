import { InstrucoesColeta } from "@/components/instrucoes-coleta";
import Link from "next/link";

export default function AgendadaPage() {
  const passos = [
    {
      numero: 1,
      titulo: "Agende a coleta",
      descricao: (
        <>
          Acesse a aba de{" "}
          <Link
            href="/coleta"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Realizar solicitação de coleta
          </Link>{" "}
          para agendar a coleta de resíduos volumosos.
        </>
      ),
      // imagemUrl: "/images/agendada-passo1.gif"
    },
    {
      numero: 2,
      titulo: "Prepare os itens",
      descricao:
        "Organize móveis, eletrodomésticos e outros itens grandes em local de fácil acesso.",
      // imagemUrl: "/images/agendada-passo2.gif"
    },
    {
      numero: 3,
      titulo: "Deixe disponível",
      descricao:
        "No dia agendado, deixe os materiais na frente da residência para a coleta.",
      // imagemUrl: "/images/agendada-passo3.gif"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <InstrucoesColeta
        titulo="Como realizar descarte de materiais volumosos ou resíduos perigosos"
        passos={passos}
      />
    </div>
  );
}
