import Image from "next/image";
import Link from "next/link";

import { Field, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Recycle, LogOut } from "lucide-react";

export default function Login() {
  return (
    <div className="container relative min-h-svh flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      {/* Exit button */}
      <Link
        href="/"
        className="absolute right-4 top-4 md:right-8 md:top-8 z-50"
      >
        <Button
          variant="ghost"
          size="icon-sm"
          className="text-muted-foreground cursor-pointer"
        >
          <LogOut className="h-5 w-5" />
        </Button>
      </Link>

      {/* Left panel */}
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex overflow-hidden">
        <Image
          src="/login.jpg"
          alt="Reciclagem"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Recycle className="mr-2 h-6 w-6" />
          RecycleBin
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              Sistema instrucional e de gerenciamento de reciclagem para seu
              municipio.
            </p>
          </blockquote>
        </div>
      </div>

      {/* Right panel */}
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar sua conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Insira seu email e senha abaixo para acessar sua conta
            </p>
          </div>

          <div className="grid gap-6">
            <form>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Label className="sr-only" htmlFor="email">
                      Email
                    </Label>
                  </Field>
                  <Input
                    id="email"
                    placeholder="nome@exemplo.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                  />
                </div>
                <div className="grid gap-2">
                  <Field>
                    <FieldLabel>Senha</FieldLabel>
                    <Label className="sr-only" htmlFor="senha">
                      Senha
                    </Label>
                  </Field>
                  <Input
                    id="senha"
                    placeholder="Insira sua senha"
                    type="password"
                    autoCapitalize="none"
                  />
                </div>
                <Button type="submit" className="cursor-pointer">
                  Entrar
                </Button>
              </div>
            </form>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Não possui uma conta?{" "}
            <Link
              href="/register"
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
