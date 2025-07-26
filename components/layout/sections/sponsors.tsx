"use client";

import Marquee from "react-fast-marquee";
import Image, { StaticImageData } from "next/image";
import logoVisoteck from "@/images/Logo_VISOTECK-menor.png"
import logoPardal from "@/images/logo-pardal.jpeg"
import logoCityShow from "@/images/logo-cityshow.jpeg"
import { StarsCountRank } from "@/components/ui/stars-count-rank";
import Link from "next/link";
import { useEffect, useState } from "react";

interface sponsorsProps {
  logo: StaticImageData
  name: string;
  href: string;
}

const sponsors: sponsorsProps[] = [
  {logo: logoVisoteck, name: "Visoteck Websites", href: "https://visoteckgo.vercel.app/" },
  {logo: logoPardal, name: "Pardal Tecnologia", href: "https://www.instagram.com/josecruzpardal777?igsh=MTExcHg1YTE4aGUyMA==" },
  {logo: logoCityShow, name: "City Show Eventos", href: "https://www.instagram.com/cityshoweventos?igsh=ejZiMG41c2ptb2gz" },
];

export const SponsorsSection = () => {
  const [windowWidth, setWindow] = useState<number>()
  useEffect(() => {
    let visualViewportWidth = window.visualViewport?.width
    setWindow(visualViewportWidth)
  }, [windowWidth])
  return (
    <section
      id="sponsors"
      className="relative w-full max-w-full mx-auto pb-24 pt-20 sm:pb-32 overflow-hidden"
    >
      {/* 🔹 Fundo com imagem */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg-sponsors.jpg"
          alt="Fundo de patrocinadores"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay escura para contraste */}
        <div className="absolute inset-0 bg-black/60 hover:backdrop-blur-md" />
      </div>

      <h2 className="text-2xl md:text-4xl text-center font-black text-white mb-6 hover:scale-110 transition-all duration-500">
        Parceiros que acreditam no som que transforma!
      </h2>

      <div className="mx-auto pt-10">
        <Marquee
          className="gap-x-32 gap-y-14"
          speed={(windowWidth ?? 750) >= 700 ? 20 : 35}
          pauseOnHover
        >
          {sponsors.map(({ logo, name, href }, index) => (
            <Link key={`${name}-${index}`} href={href} title={`link para a página da empresa: ${name}`} target="_blank" className="px-5">
            <div
              key={name}
              className="flex flex-col items-center text-xl md:text-2xl font-medium text-white gap-x-2 max-sm:scale-75 px-4"
            >
              <Image
                src={logo}
                alt={name}
                width={100}
                height={100}
                className="rounded-sm w-40 h-auto"
                quality={80}
              />
              <StarsCountRank numberOfStars={5} className="p-2" />
              {name}
            </div>
            </Link>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
