"use client";

import Link from "next/link";

import { Recycle } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="flex h-16 w-full items-center justify-between px-14">
        <div className="font-bold text-xl flex">
          <Recycle className="mr-2 h-6 w-6" />
          RecycleBin
        </div>
        <div className="flex text-base font-medium">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/">Inicio</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Instruções</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-96">
                    <ListItem
                      href="/comum"
                      title="Coleta comum (Lixo orgânico / Rejeitos)"
                    >
                      Aprenda as melhores práticas para descarte de lixo
                      orgânico e rejeitos não recicláveis de forma adequada.
                    </ListItem>
                    <ListItem href="/seletiva" title="Coleta seletiva (Recicláveis)">
                      Aprenda a separar e descartar materiais recicláveis
                      (papel, plástico, vidro e metal) de forma adequada.
                    </ListItem>
                    <ListItem
                      href="/agendada"
                      title="Coleta agendada (Resíduos volumosos)"
                    >
                      Aprenda a solicitar a remoção de itens volumosos como
                      móveis e eletrodomésticos de forma adequada.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Denuncia</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-96">
                    <ListItem
                      href="/denuncia"
                      title="Realizar solicitação de Denuncia"
                    >
                      Aprenda a relatar irregularidades ambientais e descarte
                      inadequado de resíduos de forma adequada.
                    </ListItem>
                    <ListItem
                      href="/denuncia/visualizar"
                      title="Visualizar/Editar Denuncia"
                    >
                      Aprenda a acompanhar e gerenciar suas denúncias realizadas
                      e fazer atualizações de forma adequada.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Coleta</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-96">
                    <ListItem
                      href="/coleta"
                      title="Realizar solicitação de Coleta"
                    >
                      Aprenda a agendar coletas de materiais especiais e
                      volumosos na sua residência de forma adequada.
                    </ListItem>
                    <ListItem
                      href="/coleta/visualizar"
                      title="Visualizar/Editar Coleta"
                    >
                      Aprenda a gerenciar e acompanhar suas solicitações de
                      coleta e fazer atualizações de forma adequada.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/pontos">Pontos de Coleta</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex">
          <Link href="/login">
            <Button variant="outline" size="lg" className="cursor-pointer">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
