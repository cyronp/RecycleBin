"use client";

import { SolicitacaoCard } from "@/components/solicitacao-card";

export default function VisualizarColeta() {
  const handleEditar = () => {
    console.log("Teste 2");
  };

  const handleCancelar = () => {
    console.log("Teste 1");
  };

  return (
    <div className="mx-auto max-w-7xl space-y-4 sm:space-y-6 p-4 sm:p-6 md:p-8">
      <SolicitacaoCard
        id={1}
        titulo="Coleta"
        tipo="Tipo de solicitação exemplo 1"
        status="completo"
        dataSolicitacao="21 de Fevereiro de 2026"
        onEditar={handleEditar}
        onCancelar={handleCancelar}
      />
      <SolicitacaoCard
        id={2}
        titulo="Coleta"
        tipo="Tipo de solicitação exemplo 2"
        status="pendente"
        dataSolicitacao="21 de Fevereiro de 2026"
        onEditar={handleEditar}
        onCancelar={handleCancelar}
      />
      <SolicitacaoCard
        id={2}
        titulo="Coleta"
        tipo="Tipo de solicitação exemplo 3"
        status="recusado"
        dataSolicitacao="21 de Fevereiro de 2026"
        onEditar={handleEditar}
        onCancelar={handleCancelar}
      />
    </div>
  );
}
