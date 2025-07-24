"use client";

import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const sorteios = [
  {
    id: "sorteio-1",
    titulo: "Sorteio do Mês - Caixa Bluetooth JBL",
    banner: "https://images.tcdn.com.br/img/img_prod/1240352/caixa_de_som_jbl_charge_5_bluetooth_preto_jblcharge5blk_1805_1_c06af35aff1ce801c96b07a28bde6ab5.jpg",
    descricao: "Concorra a uma super JBL Flip 6, perfeita para curtir o som da Amazônia onde quiser!",
    regras: [
      "Seguir a Rádio no Instagram",
      "Compartilhar o post oficial",
      "Preencher o formulário de inscrição",
    ],
    dataSorteio: "15 de Agosto de 2025",
  },
  {
    id: "sorteio-2",
    titulo: "Kit Super Cristal - Camisa + Boné + Caneca",
    banner: "https://bluster.com.br/wp-content/uploads/2024/01/xKit-Bluster-07-300x300.jpg.pagespeed.ic.6ZASjO-h6d.jpg",
    descricao: "Mostre que você é fã raiz com esse kit exclusivo da nossa rádio!",
    regras: [
      "Seguir a Rádio no Facebook",
      "Marcar 3 amigos no post oficial",
      "Curtir a página no Spotify",
    ],
    dataSorteio: "30 de Agosto de 2025",
  },
];

const SorteioCard = ({ sorteio }: { sorteio: (typeof sorteios)[0] }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-xl overflow-hidden border border-border bg-muted/40 dark:bg-muted/20"
    >
      <Image
        src={sorteio.banner}
        alt={`Banner do ${sorteio.titulo}`}
        width={1200}
        height={500}
        className="w-full h-64 object-cover"
      />

      <Accordion type="single" collapsible>
        <AccordionItem value="info">
          <AccordionTrigger className="text-2xl px-4 pt-4 font-bold text-left">
            {sorteio.titulo}
          </AccordionTrigger>
          <AccordionContent>
            <CardContent className="p-4 space-y-2">
              <p className="text-lg text-muted-foreground">
                {sorteio.descricao}
              </p>
              <div>
                <p className="font-semibold">Regras para participar:</p>
                <ul className="list-disc list-inside ml-4">
                  {sorteio.regras.map((regra, i) => (
                    <li key={i}>{regra}</li>
                  ))}
                </ul>
              </div>
              <p className="text-sm">
                Data do Sorteio: <strong>{sorteio.dataSorteio}</strong>
              </p>
              <Link
                href={`/sorteios/${sorteio.id}`}
                className="inline-block mt-4 text-primary font-medium hover:underline"
              >
                Ver detalhes do sorteio
              </Link>
            </CardContent>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
};

export default function SorteiosPage() {
  return (
    <main className="container py-24 sm:py-32 space-y-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center"
      >
        🎉 Sorteios Super Cristal
      </motion.h1>

      <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
        Participe de nossos sorteios mensais e ganhe prêmios incríveis enquanto curte a sintonia que movimenta o Pará.
      </p>

      <div className="grid gap-10 md:grid-cols-2">
        {sorteios.map((sorteio) => (
          <SorteioCard key={sorteio.id} sorteio={sorteio} />
        ))}
      </div>
    </main>
  );
}
