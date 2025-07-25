"use client";

interface BlogSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const BlogSearch = ({ value, onChange }: BlogSearchProps) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Buscar posts..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-primary"
      />
    </div>
  );
};
