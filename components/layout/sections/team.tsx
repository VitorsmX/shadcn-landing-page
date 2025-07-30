"use client"
import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import profile1 from "@/images/perfil-jose.jpeg";
import qrCode1 from "@/images/qrcode-jose.png";
import profile2 from "@/images/perfil-vitor.jpeg";
import qrCode2 from "@/images/qrcode-vitor.png";
import profile3 from "@/images/perfil-andre.jpeg"
import qrCode3 from "@/images/qrcode-andre.png"
import profile4 from "@/images/perfil-jeff.jpeg"
import { useState } from "react";
import { FacebookIcon, InstagramIcon, PhoneIncomingIcon } from "lucide-react";
interface TeamProps {
  imageUrl: StaticImageData | string;
  qrCodeWhatsApp: StaticImageData | string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
  name: string;
  url: string;
}
export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl: profile3,
      qrCodeWhatsApp: qrCode3,
      firstName: "André",
      lastName: "Guedes",
      positions: ["Diretor Geral", "Radialista"],
      socialNetworks: [
        {
          name: "Instagram",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "Facebook",
          url: "https://github.com/leoMirandaa",
        },
        {
          name: "WhatsApp",
          url: "https://wa.link/29oaop",
        },
      ],
    },
    {
      imageUrl: profile1,
      qrCodeWhatsApp: qrCode1,
      firstName: "José",
      lastName: "Cruz",
      positions: ["Diretor de Produção"],
      socialNetworks: [
        {
          name: "WhatsApp",
          url: "https://wa.link/99500l",
        },
        {
          name: "Instagram",
          url: "https://github.com/leoMirandaa",
        },
        {
          name: "Facebook",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },
    {
      imageUrl: profile4,
      qrCodeWhatsApp: qrCode3,
      firstName: "Jefferson",
      lastName: "Coutto",
      positions: ["Diretor de Marketing", "DJ"],
      socialNetworks: [
        {
          name: "Instagram",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "Facebook",
          url: "https://github.com/leoMirandaa",
        },
        {
          name: "WhatsApp",
          url: "https://wa.link/29oaop",
        },
      ],
    },
    {
      imageUrl: profile2,
      qrCodeWhatsApp: qrCode2,
      firstName: "Vitor",
      lastName: "Mesquita",
      positions: ["Suporte Técnico", "Desenvolvedor"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/vitorsm10/",
        },
        {
          name: "Github",
          url: "https://github.com/VitorsmX",
        },
        {
          name: "WhatsApp",
          url: "https://wa.link/1ai1ie",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/visoteck_websites/?igsh=cHLsOTVoNXBzNHBq#"
        },
      ],
    },
  ];
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "WhatsApp":
        return <PhoneIncomingIcon />
      case "Facebook":
        return <FacebookIcon />
      case "Instagram":
        return <InstagramIcon />
    }
  };

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Quem faz a Super Cristal acontecer
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Conheça os locutores, produtores e comunicadores por trás da rádio que
          é puro carimbó no coração!
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {teamList.map(
          (
            {
              imageUrl,
              qrCodeWhatsApp,
              firstName,
              lastName,
              positions,
              socialNetworks,
            },
            index
          ) => {
            const [showQRCode, setShowQRCode] = useState(false);
            const [hoverTimeout, setHoverTimeout] =
              useState<NodeJS.Timeout | null>(null);

            const handleMouseEnter = () => {
              const timeout = setTimeout(() => {
                setShowQRCode(true);
              }, 1200);

              setHoverTimeout(timeout);
            };

            const handleMouseLeave = () => {
              if (hoverTimeout) clearTimeout(hoverTimeout);
              setShowQRCode(false);
            };

            return (
              <Card
                key={index}
                className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden"
              >
                <CardHeader className="p-0 gap-0">
                  <div
                    className="relative w-full aspect-square overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => setShowQRCode(isOpen => !isOpen)}
                  >
                    {/* Foto do perfil */}
                    <Image
                      src={imageUrl}
                      alt={`foto de perfil de ${firstName} ${lastName}. ${socialNetworks[0].name}: ${socialNetworks[0].url}`}
                      width={300}
                      height={300}
                      className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ${
                        showQRCode ? "opacity-0 z-0" : "opacity-100 z-10"
                      }`}
                    />

                    {/* QR Code do WhatsApp */}
                    <Image
                      src={qrCodeWhatsApp}
                      alt={`QR Code de WhatsApp de ${firstName} ${lastName}`}
                      width={300}
                      height={300}
                      className={`w-full h-full object-contain absolute top-0 left-0 transition-opacity duration-500 ${
                        showQRCode ? "opacity-100 z-10" : "opacity-0 z-0"
                      }`}
                    />
                  </div>

                  <CardTitle className="py-6 pb-4 px-6 text-lg max-sm:text-sm max-w-[85%] text-wrap">
                    {firstName}
                    <span className="text-primary ml-2">{lastName}</span>
                  </CardTitle>
                </CardHeader>

                {positions.map((position, idx) => (
                  <CardContent
                    key={idx}
                    className={`pb-0 text-muted-foreground ${
                      idx === positions.length - 1 && "pb-6"
                    }`}
                  >
                    {position}
                    {idx < positions.length - 1 && <span>, </span>}
                  </CardContent>
                ))}

                <CardFooter className="space-x-4 mt-auto">
                  {socialNetworks.map(({ name, url }, idx) => (
                    <Link
                      key={idx}
                      href={url}
                      target="_blank"
                      className="hover:opacity-80 transition-all"
                    >
                      {socialIcon(name)}
                    </Link>
                  ))}
                </CardFooter>
              </Card>
            );
          }
        )}
      </div>
    </section>
  );
};
