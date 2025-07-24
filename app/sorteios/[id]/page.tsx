"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// 🔗 Simulação de dados fixos (futuramente virá de CMS)
const sorteiosData = [
  {
    id: "sorteio-1",
    titulo: "Sorteio do Mês - Caixa Bluetooth JBL",
    banner:
      "https://images.tcdn.com.br/img/img_prod/1240352/caixa_de_som_jbl_charge_5_bluetooth_preto_jblcharge5blk_1805_1_c06af35aff1ce801c96b07a28bde6ab5.jpg",
    descricao:
      "Concorra a uma super JBL Flip 6, perfeita para curtir o som da Amazônia onde quiser!",
    regras: [
      "Seguir a Rádio no Instagram",
      "Compartilhar o post oficial",
      "Preencher o formulário de inscrição",
    ],
    dataSorteio: "2025-08-15T23:59:59",
    linkFormulario: "https://forms.gle/formulario-sorteio-1",
    ganhador: {
      nome: "João da Silva",
      cidade: "Capanema - PA",
      premio: "Caixa JBL Flip 6",
    },
  },
  {
    id: "sorteio-2",
    titulo: "Kit Super Cristal - Camisa + Boné + Caneca",
    banner:
      "https://bluster.com.br/wp-content/uploads/2024/01/xKit-Bluster-07-300x300.jpg.pagespeed.ic.6ZASjO-h6d.jpg",
    descricao: "Mostre que você é fã raiz com esse kit exclusivo da nossa rádio!",
    regras: [
      "Seguir a Rádio no Facebook",
      "Marcar 3 amigos no post oficial",
      "Curtir a página no Spotify",
    ],
    dataSorteio: "2025-07-23T23:59:30",
    linkFormulario: "https://forms.gle/formulario-sorteio-2",
    ganhador: {
      nome: "Maria Oliveira",
      cidade: "Bragança - PA",
      premio: "Kit exclusivo Super Cristal",
    },
  },
];

function useCountdown(dateStr: string) {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(dateStr).getTime();
      const diff = target - now;

      if (diff <= 0) {
        setCountdown("Encerrado");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [dateStr]);

  return countdown;
}

export default function SorteioPage() {
  const params = useParams();
  const id = params?.id as string;
  const sorteio = sorteiosData.find((s) => s.id === id);

  const countdown = useCountdown(sorteio?.dataSorteio || "");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (!sorteio) {
    return <div className="text-center py-20">Sorteio não encontrado.</div>;
  }

  const dataEncerramento = new Date(sorteio.dataSorteio);
  const agora = new Date();

  const isFinalizado = agora >= dataEncerramento;
  const exibirGanhador = isFinalizado && !!sorteio.ganhador;

  return (
    <main className="container py-24 sm:py-32">
      <Card className="max-w-4xl mx-auto">
        <Image
          src={sorteio.banner}
          alt={`Banner do ${sorteio.titulo}`}
          width={1200}
          height={500}
          className="w-full h-64 object-cover rounded-t-md"
        />

        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold">
            {sorteio.titulo}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-lg">{sorteio.descricao}</p>

          <div>
            <h3 className="font-semibold">📋 Regras para participar:</h3>
            <ul className="list-disc list-inside ml-4">
              {sorteio.regras.map((regra, index) => (
                <li key={index}>{regra}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            {isFinalizado ? (
              <span className="inline-block text-sm font-bold text-red-700 bg-red-100 px-4 py-1 rounded">
                🔒 Sorteio Encerrado
              </span>
            ) : (
              <>
                <span className="inline-block text-sm font-bold text-green-700 bg-green-100 px-4 py-1 rounded">
                  🟢 Sorteio em Andamento
                </span>
                <p className="mt-2 text-sm text-muted-foreground">
                  Encerramento em: <strong>{countdown}</strong>
                </p>
              </>
            )}
          </div>

          {!isFinalizado && (
            <Button asChild className="mt-4">
              <Link href={sorteio.linkFormulario} target="_blank">
                Participar do Sorteio
              </Link>
            </Button>
          )}

        {exibirGanhador && (
                <Button onClick={() => setIsDialogOpen(isOpen => !isOpen)}>Ver Resultado</Button>
            )}
          

          {exibirGanhador && (
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>🏆 Ganhador do Sorteio</DialogTitle>
                </DialogHeader>
                <div className="text-center space-y-2 py-4">
                  <p><strong>Nome:</strong> {sorteio.ganhador.nome}</p>
                  <p><strong>Cidade:</strong> {sorteio.ganhador.cidade}</p>
                  <p><strong>Prêmio:</strong> {sorteio.ganhador.premio}</p>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
