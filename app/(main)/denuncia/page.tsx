import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
import { Textarea } from "@/components/ui/textarea";

import { Folder } from "lucide-react";

export default function Denuncia() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 p-6">
      <form className="space-y-8" id="denuncia-form">
        <div className="grid grid-cols-1">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Informações da Denuncia</CardTitle>
                <CardDescription>
                  Reporte irregularidades no descarte de resíduos e lixo em seu
                  bairro
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="denuncia">Motivo da denuncia</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o tipo de denúncia" />
                    </SelectTrigger>
                    <SelectContent position="popper">
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
                        <SelectLabel>Descarte Irregular de Entulho</SelectLabel>
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
                <div className="space-y-2 mt-4">
                  <Label>Bairro</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o bairro da denuncia" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectGroup>
                        <SelectLabel>Bairros</SelectLabel>
                        <SelectItem value="ADHEMAR_GARCIA">
                          Adhemar Garcia
                        </SelectItem>
                        <SelectItem value="AMERICA">América</SelectItem>
                        <SelectItem value="ANITA_GARIBALDI">
                          Anita Garibaldi
                        </SelectItem>
                        <SelectItem value="ATIRADORES">Atiradores</SelectItem>
                        <SelectItem value="AVENTUREIRO">Aventureiro</SelectItem>
                        <SelectItem value="BOA_VISTA">Boa Vista</SelectItem>
                        <SelectItem value="BOEHMERWALD">Boehmerwald</SelectItem>
                        <SelectItem value="BOM_RETIRO">Bom Retiro</SelectItem>
                        <SelectItem value="BUCAREIN">Bucarein</SelectItem>
                        <SelectItem value="CENTRO">Centro</SelectItem>
                        <SelectItem value="COMASA">Comasa</SelectItem>
                        <SelectItem value="COSTA_E_SILVA">
                          Costa e Silva
                        </SelectItem>
                        <SelectItem value="DONA_FRANCISCA">
                          Dona Francisca
                        </SelectItem>
                        <SelectItem value="ESPINHEIROS">Espinheiros</SelectItem>
                        <SelectItem value="FATIMA">Fátima</SelectItem>
                        <SelectItem value="FLORESTA">Floresta</SelectItem>
                        <SelectItem value="GLORIA">Glória</SelectItem>
                        <SelectItem value="GUANABARA">Guanabara</SelectItem>
                        <SelectItem value="IRIRIU">Iririú</SelectItem>
                        <SelectItem value="ITAUM">Itaum</SelectItem>
                        <SelectItem value="ITINGA">Itinga</SelectItem>
                        <SelectItem value="JARDIM_IRIRIU">
                          Jardim Iririú
                        </SelectItem>
                        <SelectItem value="JARDIM_PARAISO">
                          Jardim Paraíso
                        </SelectItem>
                        <SelectItem value="JARDIM_SOFIA">
                          Jardim Sofia
                        </SelectItem>
                        <SelectItem value="JARIVATUBA">Jarivatuba</SelectItem>
                        <SelectItem value="JOAO_COSTA">João Costa</SelectItem>
                        <SelectItem value="MORRO_DO_MEIO">
                          Morro do Meio
                        </SelectItem>
                        <SelectItem value="NOVA_BRASILIA">
                          Nova Brasília
                        </SelectItem>
                        <SelectItem value="PARANAGUAMIRIM">
                          Paranaguamirim
                        </SelectItem>
                        <SelectItem value="PARQUE_GUARANI">
                          Parque Guarani
                        </SelectItem>
                        <SelectItem value="PETROPOLIS">Petrópolis</SelectItem>
                        <SelectItem value="PIRABEIRABA">Pirabeiraba</SelectItem>
                        <SelectItem value="PROFIPO">Profipo</SelectItem>
                        <SelectItem value="RIO_BONITO">Rio Bonito</SelectItem>
                        <SelectItem value="SAGUACU">Saguaçu</SelectItem>
                        <SelectItem value="SANTA_CATARINA">
                          Santa Catarina
                        </SelectItem>
                        <SelectItem value="SANTO_ANTONIO">
                          Santo Antônio
                        </SelectItem>
                        <SelectItem value="SAO_MARCOS">São Marcos</SelectItem>
                        <SelectItem value="ULYSSES_GUIMARAES">
                          Ulysses Guimarães
                        </SelectItem>
                        <SelectItem value="VILA_CUBATAO">
                          Vila Cubatão
                        </SelectItem>
                        <SelectItem value="VILA_NOVA">Vila Nova</SelectItem>
                        <SelectItem value="ZONA_INDUSTRIAL_NORTE">
                          Zona Industrial Norte
                        </SelectItem>
                        <SelectItem value="ZONA_INDUSTRIAL_TUPY">
                          Zona Industrial Tupy
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 mt-4">
                  <Label>Endereço</Label>
                  <Input placeholder="Rua Exemplo, 123" required></Input>
                </div>
                <div className="space-y-2 mt-4">
                  <Label htmlFor="observacao">
                    Observação{" "}
                    <span className="text-muted-foreground">(Opcional)</span>
                  </Label>
                  <Textarea
                    id="observacao"
                    placeholder="Adicione detalhes relevantes sobre a denúncia"
                  />
                </div>
                <div className="space-y-2 mt-4">
                  <Label>
                    Foto da denuncia
                    <span className="text-muted-foreground">(Limite 1)</span>
                  </Label>
                  <label
                    htmlFor="photo"
                    className="rounded-lg border-2 border-dashed border-green-300 bg-green-50 p-12 text-center cursor-pointer block hover:bg-green-100 transition-colors"
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center text-2xl text-green-400">
                      <Folder />
                    </div>
                    <p className="text-green-600">
                      Insira a imagem de prova para denuncia
                    </p>
                    <Input
                      id="photo"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      required
                    />
                  </label>
                </div>
                <div className="pt-4">
                  <Button className="w-full" type="submit">
                    Registrar Denuncia
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
