import { cn } from "@/lib/utils";

export type StatusType = "completo" | "pendente" | "recusado";

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const statusConfig = {
  completo: {
    label: "Completo",
    className:
      "bg-green-100 border-green-300 text-green-800",
  },
  pendente: {
    label: "Pendente",
    className:
      "bg-amber-100 border-amber-300 text-amber-800",
  },
  recusado: {
    label: "Recusado",
    className:
      "bg-red-100 border-red-300 text-red-800",
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-1 text-xs font-semibold",
        config.className,
        className,
      )}
    >
      {config.label}
    </span>
  );
}
