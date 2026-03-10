import Image from "next/image";

interface PassoInstrucao {
  numero: number;
  titulo: string;
  descricao: string;
  imagemUrl?: string;
}

interface InstrucoesColetaProps {
  titulo?: string;
  passos: PassoInstrucao[];
}

export function InstrucoesColeta({
  titulo = "Como realizar o descarte do material",
  passos,
}: InstrucoesColetaProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">{titulo}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {passos.map((passo) => (
          <div key={passo.numero} className="flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-4">{passo.numero} Passo</h2>

            <div className="w-full aspect-square bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden mb-4">
              {passo.imagemUrl ? (
                <Image
                  src={passo.imagemUrl}
                  alt={`Passo ${passo.numero}: ${passo.titulo}`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-gray-500 text-center px-4">
                  IMAGEM DE PASSO A PASSO
                </span>
              )}
            </div>

            <div className="text-center">
              <h3 className="font-semibold text-base mb-2">{passo.titulo}</h3>
              <p className="text-sm text-gray-600">{passo.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
