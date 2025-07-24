"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "A Rádio Super Cristal transmite 24 horas mesmo?",
    answer:
      "Sim! Nossa programação é contínua: 24 horas por dia, 7 dias por semana, durante todo o ano. Estamos sempre com você, seja de madrugada, de manhã ou no fim da tarde.",
    value: "item-1",
  },
  {
    question: "Como faço para participar dos sorteios?",
    answer:
      "É simples! Basta seguir as instruções específicas de cada sorteio na nossa página de Sorteios. Geralmente, você precisará seguir nossas redes sociais, compartilhar um post e preencher um formulário com seus dados e comprovantes.",
    value: "item-2",
  },
  {
    question: "A rádio é só online ou tem frequência FM também?",
    answer:
      "Atualmente somos uma rádio online com alcance global, transmitindo via internet com qualidade de som digital. Ideal para ouvir pelo celular, computador ou dispositivos inteligentes.",
    value: "item-3",
  },
  {
    question: "Quem pode participar dos sorteios?",
    answer:
      "Qualquer pessoa maior de 18 anos que resida no Brasil pode participar, desde que siga corretamente as regras estabelecidas no regulamento de cada sorteio.",
    value: "item-4",
  },
  {
    question: "Posso ouvir a rádio pelo celular?",
    answer:
      "Com certeza! Basta acessar nosso site ou clicar no botão 'Ouça ao Vivo'. Estamos otimizados para funcionar em qualquer celular com acesso à internet.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section
      id="faq"
      className="container md:w-[700px] py-24 sm:py-32 animate-fadeIn transition-opacity duration-700"
    >
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary tracking-wider uppercase animate-fadeInUp duration-500">
          Perguntas Frequentes
        </h2>

        <h2 className="text-3xl md:text-4xl font-bold animate-fadeInUp duration-700">
          Tudo o que você precisa saber sobre a Super Cristal
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot space-y-2 animate-fadeInUp duration-1000">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left text-lg font-medium">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
