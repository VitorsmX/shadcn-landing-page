import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  coverImage: string;
  excerpt: string;
  slug: string;
  date: string;
  category: string;
}

export const BlogCard = ({ coverImage, title, excerpt, slug, date, category }: BlogCardProps) => {
  return (
    <div className="bg-white/80 rounded-lg p-4 border shadow-sm">
      <Image src={coverImage} alt={`Imagem da postagem ${title}`} width={500} height={500} className="w-full max-h-96 object-cover" quality={80}/>
      <h3 className="text-xl font-semibold text-zinc-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 mb-2">{excerpt}</p>
      <div className="text-xs text-gray-500 mb-4">{date} • {category}</div>
      <Link
        href={`/blog/${slug}`}
        className="text-sm font-medium text-primary hover:underline"
      >
        Ler mais
      </Link>
    </div>
  );
};