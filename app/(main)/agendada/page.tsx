import { InstrucoesColeta } from "@/components/instrucoes-coleta";
import Link from "next/link";
import { CalendarPlus, PackageOpen, Truck, ClipboardCheck } from "lucide-react";

export default function AgendadaPage() {
  const passos = [
    {
      numero: 1,
      titulo: "Agende a coleta",
      icone: CalendarPlus,
      descricao: (
        <>
          Acesse a aba de{" "}
          <Link
            href="/coleta"
            className="text-amber-700 hover:text-amber-900 underline font-medium"
          >
            Realizar solicitação de coleta
          </Link>{" "}
          e preencha o formulário informando o tipo de material, quantidade
          estimada e o melhor dia para retirada.
        </>
      ),
    },
    {
      numero: 2,
      titulo: "Prepare os itens",
      icone: PackageOpen,
      descricao:
        "Organize móveis, eletrodomésticos e outros itens grandes em local de fácil acesso. Desmonte o que for possível para facilitar o transporte. Retire objetos pessoais de gavetas e compartimentos.",
    },
    {
      numero: 3,
      titulo: "Aguarde a confirmação",
      icone: ClipboardCheck,
      descricao:
        "Após a solicitação, você receberá a confirmação com a data e horário estimado da coleta. Acompanhe o status pelo painel de solicitações.",
    },
    {
      numero: 4,
      titulo: "Deixe disponível para retirada",
      icone: Truck,
      descricao:
        "No dia agendado, deixe os materiais na frente da residência ou em local combinado. Sinalize itens frágeis ou perigosos com etiquetas para a segurança da equipe de coleta.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <InstrucoesColeta
        titulo="Como descartar materiais volumosos ou resíduos perigosos"
        subtitulo="Itens grandes ou perigosos precisam de coleta especial. Agende a retirada e garanta que o descarte seja feito de forma segura e responsável."
        passos={passos}
        corTema="amber"
      />
    </div>
  );
}
