import { Suspense } from "react";
import BlogPage from "@/components/blog-page";

export default function BlogRoute() {
  return (
    <Suspense fallback={<div className="text-center py-10">Carregando...</div>}>
      <BlogPage />
    </Suspense>
  );
}
