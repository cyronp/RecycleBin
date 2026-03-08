import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Folder } from "lucide-react";

export default function Denuncia() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 p-6">
      <form className="space-y-8">
        <div className="grid grid-cols-1">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Denuncia</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="denuncia">Motivo da denuncia</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o tipo de denúncia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Descarte Irregular de Lixo</SelectLabel>
                        <SelectItem value="DESCARTE_IRREGULAR_TERRENO_BALDIO">
                          Lixo jogado em terreno baldio
                        </SelectItem>
                        <SelectItem value="DESCARTE_IRREGULAR_RUA">
                          Lixo abandonado em rua
                        </SelectItem>
                        <SelectItem value="DESCARTE_IRREGULAR_RIO_VALA">
                          Lixo jogado em rio ou vala
                        </SelectItem>
                        <SelectItem value="DESCARTE_IRREGULAR_SACOS_RASGADOS">
                          Sacos de lixo rasgados espalhados na rua
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>
                          Descarte Irregular de Resíduos Volumosos
                        </SelectLabel>
                        <SelectItem value="DESCARTE_VOLUMOSO_MOVEIS">
                          Móveis abandonado em rua ou terreno
                        </SelectItem>
                        <SelectItem value="DESCARTE_VOLUMOSO_ELETRODOMESTICO">
                          Eletrodomestico abandonado em rua ou terreno
                        </SelectItem>
                        <SelectItem value="DESCARTE_VOLUMOSO_OBSTRUCAO">
                          Grandes objetos bloqueando passagem
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>
                          Descarte Irregular de Entulho
                        </SelectLabel>
                        <SelectItem value="ENTULHO_IRREGULAR_OBRA_TERRENO">
                          Má conduta de restos de obra 
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>
                          Descarte de Resíduos Perigosos
                        </SelectLabel>
                        <SelectItem value="RESIDUO_PERIGOSO_PILHAS_BATERIAS">
                          Pilhas e baterias jogadas na rua
                        </SelectItem>
                        <SelectItem value="RESIDUO_PERIGOSO_LAMPADAS">
                          Lâmpadas quebradas descartadas em local público
                        </SelectItem>
                        <SelectItem value="RESIDUO_PERIGOSO_QUIMICOS">
                          Produtos químicos descartados incorretamente
                        </SelectItem>
                        <SelectItem value="RESIDUO_PERIGOSO_OLEO">
                          Óleo ou substâncias contaminantes jogadas no solo
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Problemas Ambientais</SelectLabel>
                        <SelectItem value="DANO_AMBIENTAL_QUEIMA">
                          Queima de lixo
                        </SelectItem>
                        <SelectItem value="DANO_AMBIENTAL_POLUICAO_RIO">
                          Poluição de rio ou córrego
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Obstrução de Via Pública</SelectLabel>
                        <SelectItem value="OBSTRUCAO_VIA_ENTULHO_CALCADA">
                          Entulho bloqueando calçada
                        </SelectItem>
                        <SelectItem value="OBSTRUCAO_VIA_MOVEIS">
                          Móveis impedindo passagem
                        </SelectItem>
                        <SelectItem value="OBSTRUCAO_VIA_LIXO_RUA">
                          Lixo bloqueando rua
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Foto da denuncia</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border-2 border-dashed border-green-300 bg-green-50 p-12 text-center cursor-pointer">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center text-2xl text-green-400">
                    <Folder />
                  </div>
                  <p className="text-green-600">
                    Insira a imagem de prova para denuncia
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
