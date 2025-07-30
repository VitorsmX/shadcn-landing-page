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
            <RadioPlayer streamUrl="https://stream-163.zeno.fm/khsh4jxfjesuv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJraHNoNGp4Zmplc3V2IiwiaG9zdCI6InN0cmVhbS0xNjMuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6InN4Q0tJN293U25LdUlTSnIwcFYwd3ciLCJpYXQiOjE3NTM4Mzc4NzAsImV4cCI6MTc1MzgzNzkzMH0.giT1ca9j2UBH8zvOvALbmD9hJk7046UyWj6bMXtB0_c&an-uid=4681006817049242923&dot-uid=0c3c2204004a6f3b46e09964&triton-uid=cookie%3A63a1f8ae-f733-43c6-a9d3-60eb745614ae&amb-uid=4552631827473961733&dbm-uid=CAESELLZqA1UAm2F_deLUeLhGQk&cto-uid=7f45a3be-5216-415a-a943-7ed67a5c3b18-68801461-4252&bsw-uid=8bd2e6dc-cc2c-4008-9828-faa063c6ab80&dyn-uid=8823961300508505310&ttd-uid=91e70c23-e78b-4b5e-ba12-d826bc30d0fd&adtonosListenerId=01K1CDYMG0FRF3W3V7HD8QWGZA&aw_0_req_lsid=2e8120ee12b12f72bd37b5b2bbea77c1" className="min-w-full justify-center" />
          </div>
        </div>
      </div>
    </section>
  );
};
