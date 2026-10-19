// Badge colors for each project category.
// Tailwind only generates classes it can find written out in full, so each
// entry is a complete class string (no building class names from variables).
const categoryColors: Record<string, string> = {
  WEB: "bg-[#678d58] border-[#678d58] text-black",
  MOBILE: "bg-[#0d324d] border-[#0d324d] text-white",
  "FULL STACK": "bg-[#d9a441] border-[#d9a441] text-black",
  DESKTOP: "bg-[#b5573b] border-[#b5573b] text-white",
};

// Used for any category not listed above.
const fallback = "bg-gray-600 border-gray-600 text-white";

export function categoryColor(category: string) {
  return categoryColors[category] ?? fallback;
}
