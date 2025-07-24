"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export const SorteiosSection = () => {
  return (
    <section id="sorteios" className="py-12">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <span className="text-6xl">🎁</span>
                <div className="mt-2">
                  Participe dos
                  <span className="text-transparent pl-2 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text">
                    Sorteios da Super Cristal!
                  </span>
                </div>
              </CardTitle>
            </CardHeader>

            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Toda semana, prêmios incríveis esperam por você! Entre agora e confira como participar — é fácil, gratuito e cheio de emoção!
            </CardContent>

            <CardFooter>
              <Button asChild>
                <Link href="/sorteios">
                  Ver Sorteios
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
