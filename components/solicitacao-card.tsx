"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StatusBadge, StatusType } from "@/components/status-badge";
import { Pencil, Ban } from "lucide-react";

interface SolicitacaoCardProps {
  id: number;
  tipo: string;
  titulo: string;
  status: StatusType;
  dataSolicitacao: string;
  onEditar?: () => void;
  onCancelar?: () => void;
}

export function SolicitacaoCard({
  id,
  tipo,
  titulo,
  status,
  dataSolicitacao,
  onEditar,
  onCancelar,
}: SolicitacaoCardProps) {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="space-y-2 flex-1">
            <CardTitle className="text-xl sm:text-2xl">
              {titulo}{" "}
              <span className="text-base sm:text-lg text-muted-foreground font-normal">
                #{id}
              </span>
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">
              {tipo}
            </CardDescription>
          </div>
          <div className="flex items-center sm:items-start">
            <StatusBadge status={status} />
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">
            Data da solicitação:
          </span>
          <span>{dataSolicitacao}</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <Button
            className="w-full sm:w-auto cursor-pointer"
            onClick={onEditar}
            size="default"
          >
            <Pencil className="h-4 w-4" />
            Editar
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive"><Ban/>Cancelar</Button>
            </AlertDialogTrigger>
            <AlertDialogContent size="sm">
              <AlertDialogHeader>
                <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                  <Trash2Icon />
                </AlertDialogMedia>
                <AlertDialogTitle>Cancelar solicitação?</AlertDialogTitle>
                <AlertDialogDescription>
                  Você tem certeza que deseja cancelar a solicitação realizada?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel variant="outline" className="cursor-pointer">Voltar</AlertDialogCancel>
                <AlertDialogAction variant="destructive" className="cursor-pointer">
                  Cancelar
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardContent>
    </Card>
  );
}
