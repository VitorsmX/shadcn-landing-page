"use client";

import { RadioPlayer } from "@/components/radio-player";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {

  return (
    <section className="relative w-full overflow-hidden">
      {/* ✅ Background image coberta */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg-hero.jpeg"
          alt="Fundo Hero"
          fill
          className="object-cover object-center"
          priority
        />
        {/* ✅ Overlay escura para contraste de texto */}
        <div className="absolute backdrop-blur-[1px] inset-0 bg-black/40"></div>
      </div>

      <div className="container grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8 bg-black/80 p-5 rounded-lg backdrop-blur-sm">
          <Badge variant="outline" className="text-sm py-2">
            <Link href="/blog">
              <span className="mr-2 text-primary">
                <Badge>Novidades!</Badge>
              </span>
              <span>{" "}Acompanhe nossas notícias no nosso blog</span>
            </Link>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold text-white hover:scale-105 transition-all duration-200">
            <h1>
              O Som que Movimenta as Comunidades do
              <span className="text-transparent px-2 bg-gradient-to-r from-[#ff3434] to-[#c20303] bg-clip-text">
                Pará
              </span>
              <hr />
              <span className="text-transparent px-2 bg-gradient-to-r from-[#424cff] to-[#030fed] bg-clip-text">
                RÁDIO SUPER CRYSTAL
              </span>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            Ouça a Super Crystal, onde o ritmo da Amazônia ganha vida.
          </p>

          <div className="min-w-full">
            <RadioPlayer streamUrl="https://stream-ssl.example.com:8000/live.mp3" className="min-w-full justify-center" />
          </div>
        </div>
      </div>
    </section>
  );
};
