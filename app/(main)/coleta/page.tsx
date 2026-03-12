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

export default function Coleta() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 p-6">
      <form className="space-y-8" id="coleta-form">
        <div className="grid grid-cols-1">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Solicitação de Coleta</CardTitle>
                <CardDescription>
                  Solicite a coleta de resíduos recicláveis, volumosos ou
                  especiais em seu endereço
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="coleta">Tipo de coleta</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o tipo de coleta" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectGroup>
                        <SelectLabel>Lixo Eletrônico</SelectLabel>
                        <SelectItem value="ELETRONICO_COMPUTADOR_NOTEBOOK">
                          Aparelhos eletronicos (celular, computador, etc)
                        </SelectItem>
                        <SelectItem value="VOLUMOSO_ELETRODOMESTICO">
                          Eletrodomésticos grandes (geladeira, fogão, etc)
                        </SelectItem>
                        <SelectItem value="ELETRONICO_OUTROS">
                          Outros eletrônicos
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Móveis e Objetos Volumosos</SelectLabel>
                        <SelectItem value="VOLUMOSO_MOVEIS">
                          Móveis (sofá, armário, cama, etc)
                        </SelectItem>
                        <SelectItem value="VOLUMOSO_COLCHAO">
                          Colchões
                        </SelectItem>
                        <SelectItem value="VOLUMOSO_OUTROS">
                          Outros objetos grandes
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Entulho de Construção</SelectLabel>
                        <SelectItem value="ENTULHO_REFORMA_PEQUENA">
                          Entulho de pequena reforma
                        </SelectItem>
                        <SelectItem value="ENTULHO_REFORMA_MEDIA">
                          Entulho de reforma média
                        </SelectItem>
                        <SelectItem value="ENTULHO_REFORMA_GRANDE">
                          Entulho de reforma grande
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Resíduos Especiais</SelectLabel>
                        <SelectItem value="ESPECIAL_PILHAS_BATERIAS">
                          Pilhas e baterias
                        </SelectItem>
                        <SelectItem value="ESPECIAL_LAMPADAS">
                          Lâmpadas fluorescentes
                        </SelectItem>
                        <SelectItem value="ESPECIAL_OLEO_COZINHA">
                          Óleo de cozinha usado
                        </SelectItem>
                        <SelectItem value="ESPECIAL_PNEUS">Pneus</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 mt-4">
                  <Label>Bairro</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o bairro da coleta" />
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
                    placeholder="Adicione informações sobre quantidade, horário preferencial ou outras observações"
                  />
                </div>
                <div className="space-y-2 mt-4">
                  <Label>
                    Foto dos materiais{" "}
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
                      Insira uma foto dos materiais para coleta
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
                    Solicitar Coleta
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
