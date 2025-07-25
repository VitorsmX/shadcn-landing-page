"use client"

interface BlogFilterProps {
    categories: string[];
    selected: string;
    onChange: (category: string) => void;
  }

  export const BlogFilter = ({ categories, selected, onChange }: BlogFilterProps) => {
    return (
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-1 rounded-full border ${selected === cat ? "bg-primary text-white" : "bg-white text-primary border-primary"}`}
            onClick={() => onChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    );
  };