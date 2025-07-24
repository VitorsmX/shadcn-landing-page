"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import coverImage1 from "@/images/coverImageBlog1.jpg";
import { cn, cutLongText } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { ArrowRight } from "lucide-react";

interface NewsPreviewProps {
  coverImage: StaticImageData;
  title: string;
  description: string;
}

const newsList: NewsPreviewProps[] = [
  {
    coverImage: coverImage1,
    title: "📻 Super Crystal na COP 30",
    description:
      "Acompanhe nossa cobertura inédita sobre o evento que irá mudar a forma como vemos a Amazônia.",
  },
  {
    coverImage: coverImage1,
    title: "🎶 Festival de Carimbó 2025",
    description:
      "Veja como foi a transmissão ao vivo do maior festival de Carimbó do Norte!",
  },
  {
    coverImage: coverImage1,
    title: "🌱 Comunidades Ribeirinhas",
    description:
      "Entrevistas exclusivas com líderes das comunidades ribeirinhas do Pará.",
  },
  {
    coverImage: coverImage1,
    title: "🎤 Podcast: Vozes da Amazônia",
    description:
      "Nosso novo podcast com histórias reais do coração da floresta.",
  },
];

export const NewsSliderSection = () => {

  const { theme } = useTheme()

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
  });

  return (
    <section id="news" className="container py-24 sm:py-32 relative">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-lg text-primary font-extrabold mb-2 tracking-wider bg-black/70 hover:bg-black transition-colors duration-400">
          Mais que rádio, é conexão com a nossa cultura!
        </h2>

        <h2 className={cn("text-3xl md:text-4xl mb-4 font-black tracking-widest bg-black/80 hover:bg-black transition-colors duration-400", theme === "dark" ? "text-amber-100" : "text-amber-200")}>
          Acompanhe as NOTÍCIAS da comunidade na Super Crystal
        </h2>
        <p className={cn("text-xl underline underline-offset-0", theme === "dark" ? "text-zinc-100" : "text-white")}>
          Fique por dentro das vozes, eventos e histórias que fazem a Amazônia pulsar.
        </p>
      </div>

      {/* 🔹 Fundo com imagem */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg-news-para.jpg"
          alt="Fundo de patrocinadores"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay escura para contraste */}
        <div className={cn("absolute inset-0", theme === "dark" ? "bg-black/60" : "bg-black/30")} />
      </div>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {newsList.map(({ coverImage, title, description }, index) => {
          const cuttedDescription = cutLongText(description, 100, "... Clique para ler mais");

          return (
            <Link
              href={`/blog/${index}`} // troque para o slug real quando tiver
              key={`${title}-${index}`}
              className="keen-slider__slide"
            >
              <Card className="h-full bg-background/80 dark:bg-card hover:bg-background transition-all delay-75">
                <CardHeader>
                  <Image
                    src={coverImage}
                    alt={`${title}: ${cuttedDescription}`}
                    width={400}
                    height={250}
                    className="rounded-sm w-full h-40 object-cover"
                    quality={80}
                  />
                  <CardTitle className="text-lg mt-2">{title}</CardTitle>
                </CardHeader>

                <CardContent className="text-muted-foreground text-sm">
                  {cuttedDescription}
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      <div className="space-y-4 md:space-y-6 md:space-x-4 mt-10">
        <Link href={"/blog"}>
          <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              Veja mais notícias
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
      
    </section>
  );
};
