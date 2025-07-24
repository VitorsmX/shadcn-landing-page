"use client";

import Marquee from "react-fast-marquee";
import Image, { StaticImageData } from "next/image";
import logoVisoteck from "@/images/Logo_VISOTECK-menor.png"
import { StarsCountRank } from "@/components/ui/stars-count-rank";

interface sponsorsProps {
  logo: StaticImageData
  name: string;
}

const sponsors: sponsorsProps[] = [
  {logo: logoVisoteck, name: "Visoteck Websites" },
];

export const SponsorsSection = () => {
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
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <h2 className="text-2xl md:text-4xl text-center font-black text-white mb-6 hover:scale-110 transition-all duration-500">
        Parceiros que acreditam no som que transforma!
      </h2>

      <div className="mx-auto pt-10">
        <Marquee
          className="gap-[3rem]"
          speed={20}
          pauseOnHover
        >
          {sponsors.map(({ logo, name }) => (
            <div
              key={name}
              className="flex flex-col items-center text-xl md:text-2xl font-medium text-white gap-x-2"
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
          ))}
        </Marquee>
      </div>
    </section>
  );
};
