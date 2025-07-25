import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const mockPosts = [
  {
    slug: "primeiro-sorteio",
    title: "Primeiro Sorteio ao Vivo!",
    content: `
      <p>Foi um sucesso absoluto! 🎉</p>
      <p>Transmitido diretamente do estúdio da Rádio Super Cristal, nosso primeiro sorteio premiou ouvintes de todo o Pará.</p>
      <p>Fique ligado que em breve teremos mais!</p>
    `,
    date: "25/07/2025",
    category: "Sorteios",
    banner: "/festa-junina.jpg",
  },
  {
    slug: "festa-junina",
    title: "Cobertura da Festa Junina",
    content: `
      <p>🎊 Um dos eventos mais animados do ano foi coberto com muito forró e alegria pela nossa equipe!</p>
      <p>Acompanhe tudo que rolou, com fotos exclusivas e entrevistas com os artistas locais.</p>
    `,
    date: "20/06/2025",
    category: "Eventos",
    banner: "/festa-junina.jpg",
  },
  {
    title: "Novidades no Estúdio",
    banner: "/festa-junina.jpg",
    content: `
      <p>🎊 Um dos eventos mais animados do ano foi coberto com muito forró e alegria pela nossa equipe!</p>
      <p>Acompanhe tudo que rolou, com fotos exclusivas e entrevistas com os artistas locais.</p>
    `,
    slug: "novidades-estudio",
    date: "15/06/2025",
    category: "Bastidores",
  },
];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const awaitedParams = await params;
  const post = mockPosts.find((p) => p.slug === awaitedParams.slug);
  return {
    title: post?.title || "Post não encontrado",
  };
}

export default async function PostPage({ params }: Props) {
    const awaitedParams = await params;
  const post = mockPosts.find((p) => p.slug === awaitedParams.slug);

  if (!post) return notFound();

  return (
    <main className="container max-w-3xl py-24 sm:py-32 animate-fade-in">
      <div className="mb-6">
        <Button variant="ghost" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Blog
          </Link>
        </Button>
      </div>

      {post.banner && (
        <div className="rounded-lg overflow-hidden mb-8 shadow-md">
          <Image
            src={post.banner}
            alt={post.title}
            width={1200}
            height={500}
            className="w-full h-[300px] object-cover"
          />
        </div>
      )}

      <Badge className="mb-3">{post.category}</Badge>

      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-muted-foreground text-sm mb-8">{post.date}</p>

      <article
        className="prose prose-invert prose-neutral dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}
