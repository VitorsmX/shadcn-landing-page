"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { BlogFilter } from "@/components/blog-filter";
import { BlogSearch } from "@/components/blog-search";
import { BlogCard } from "@/components/blog-card";

const mockPosts = [
  {
    title: "Primeiro Sorteio ao Vivo!",
    coverImage: "/festa-junina.jpg",
    excerpt: "Confira como foi nosso primeiro grande sorteio na Super Cristal...",
    slug: "primeiro-sorteio",
    date: "25/07/2025",
    category: "Sorteios",
  },
  {
    title: "Cobertura da Festa Junina",
    coverImage: "/festa-junina.jpg",
    excerpt: "Veja as fotos e vídeos da cobertura especial da Rádio Super Cristal.",
    slug: "festa-junina",
    date: "20/06/2025",
    category: "Eventos",
  },
  {
    title: "Novidades no Estúdio",
    coverImage: "/festa-junina.jpg",
    excerpt: "Conheça os novos equipamentos e melhorias no som da nossa rádio!",
    slug: "novidades-estudio",
    date: "15/06/2025",
    category: "Bastidores",
  },
];

const categories = ["Todos", "Sorteios", "Eventos", "Bastidores"];

export default function BlogPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(2);

  // 🧠 Atualiza o estado local sempre que os params mudarem
  useEffect(() => {
    const search = searchParams.get("busca") || "";
    const filter = searchParams.get("categoria") || "Todos";
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "2");

    setSearch(search);
    setFilter(filter);
    setCurrentPage(page);
    setLimit(limit);
  }, [searchParams]);

  // 🔁 Atualiza a URL e reativa o efeito acima
  const updateParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "" || value === "Todos") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    // Resetar para página 1 ao mudar busca/categoria
    if (key !== "page") {
      params.set("page", "1");
    }

    router.push(`/blog?${params.toString()}`);
  };

  // 📦 Filtra posts
  const filteredPosts = mockPosts.filter((post) => {
    const matchCategory = filter === "Todos" || post.category === filter;
    const matchSearch = post.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / limit);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );

  return (
    <section className="container py-24 sm:py-32">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Nosso Blog</h2>
        <p className="text-muted-foreground">
          Fique por dentro das novidades da Super Cristal!
        </p>
      </div>

      <BlogSearch value={search} onChange={(val) => updateParams("busca", val)} />
      <BlogFilter categories={categories} selected={filter} onChange={(val) => updateParams("categoria", val)} />

      <div className="grid gap-6 md:grid-cols-2">
        {paginatedPosts.length > 0 ? (
          paginatedPosts.map((post) => <BlogCard key={post.slug} {...post} />)
        ) : (
          <p className="col-span-full text-center text-muted-foreground">
            Nenhum post encontrado.
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => {
            const page = i + 1;
            const isActive = page === currentPage;

            return (
              <button
                key={page}
                onClick={() => updateParams("page", page.toString())}
                className={`px-3 py-1 border rounded transition-all ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-white text-primary border-primary"
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
