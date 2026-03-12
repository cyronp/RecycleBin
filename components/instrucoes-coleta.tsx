import { type ReactNode, type ElementType } from "react";
import { CheckCircle2, type LucideProps } from "lucide-react";

interface PassoInstrucao {
  numero: number;
  titulo: string;
  descricao: string | ReactNode;
  icone?: ElementType<LucideProps>;
}

interface InstrucoesColetaProps {
  titulo?: string;
  subtitulo?: string;
  passos: PassoInstrucao[];
  corTema?: "green" | "blue" | "amber" | "rose";
}

const coresTema = {
  green: {
    badge: "bg-green-100 text-green-700",
    linha: "bg-green-300",
    numero: "bg-green-600",
    borda: "border-green-200",
    destaque: "bg-green-50",
    icone: "text-green-600",
    headerGradient: "from-green-600 to-emerald-500",
  },
  blue: {
    badge: "bg-blue-100 text-blue-700",
    linha: "bg-blue-300",
    numero: "bg-blue-600",
    borda: "border-blue-200",
    destaque: "bg-blue-50",
    icone: "text-blue-600",
    headerGradient: "from-blue-600 to-cyan-500",
  },
  amber: {
    badge: "bg-amber-100 text-amber-700",
    linha: "bg-amber-300",
    numero: "bg-amber-600",
    borda: "border-amber-200",
    destaque: "bg-amber-50",
    icone: "text-amber-600",
    headerGradient: "from-amber-600 to-yellow-500",
  },
  rose: {
    badge: "bg-rose-100 text-rose-700",
    linha: "bg-rose-300",
    numero: "bg-rose-600",
    borda: "border-rose-200",
    destaque: "bg-rose-50",
    icone: "text-rose-600",
    headerGradient: "from-rose-600 to-pink-500",
  },
};

export function InstrucoesColeta({
  titulo = "Como realizar o descarte do material",
  subtitulo,
  passos,
  corTema = "green",
}: InstrucoesColetaProps) {
  const cores = coresTema[corTema];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-foreground mb-3">{titulo}</h1>
        {subtitulo && (
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subtitulo}
          </p>
        )}
      </div>

      {/* Passos - Timeline */}
      <div className="relative mb-14">
        {/* Linha vertical conectora */}
        <div
          className={`absolute left-6 top-8 bottom-8 w-0.5 ${cores.linha} hidden sm:block`}
        />

        <div className="space-y-5">
          {passos.map((passo, index) => {
            const Icone = passo.icone;
            const isUltimo = index === passos.length - 1;

            return (
              <div
                key={passo.numero}
                className={`relative flex gap-5 p-5 rounded-xl border ${cores.borda} bg-card shadow-sm transition-all duration-200 group`}
              >
                {/* Indicador do passo */}
                <div className="shrink-0 z-10 flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full ${cores.numero} text-white flex items-center justify-center text-lg font-bold shadow-md`}
                  >
                    {Icone ? <Icone className="w-5 h-5" /> : passo.numero}
                  </div>
                  {!isUltimo && (
                    <div
                      className={`w-0.5 h-5 ${cores.linha} mt-1 sm:hidden`}
                    />
                  )}
                </div>

                {/* Conteúdo */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cores.badge}`}
                    >
                      Passo {passo.numero}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-card-foreground mb-1">
                    {passo.titulo}
                  </h3>
                  <div className="text-muted-foreground leading-relaxed">
                    {passo.descricao}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
