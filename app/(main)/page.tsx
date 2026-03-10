import Link from "next/link";
import {
  ArrowRight,
  Recycle,
  MapPin,
  Calendar,
  AlertTriangle,
  Leaf,
  Users,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforme o Futuro do{" "}
              <span className="text-green-600">Meio Ambiente</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Aprenda de forma simples como reciclar corretamente diferentes
              tipos de materiais e resíduos. Solicite coletas, encontre pontos
              de descarte e contribua para uma cidade mais limpa e sustentável.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Em poucos passos você contribui para um ambiente mais sustentável
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Aprenda</h3>
              <p className="text-gray-600">
                Consulte as instruções sobre como separar seus resíduos
                corretamente
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Separe</h3>
              <p className="text-gray-600">
                Separe seu lixo de forma consciente e humana para realizarmos o descarte correto
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Solicitar</h3>
              <p className="text-gray-600">
                Solicite coleta para itens volumosos e/ou resíduos perigosos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Contribua</h3>
              <p className="text-gray-600">
                Faça denúncias de descarte irregular e ajude sua comunidade
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
