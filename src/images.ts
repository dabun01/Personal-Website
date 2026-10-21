import type { ImageMetadata } from "astro";

// Every image in src/assets/images, keyed by filename ("Boardman.png").
// Images imported from src/ go through Astro's image pipeline, so <Image />
// can resize them and convert them to WebP. Files in public/ can't be optimized.
const files = import.meta.glob<{ default: ImageMetadata }>(
  "./assets/images/*.{png,jpg,jpeg,JPG,JPEG,webp}",
  { eager: true }
);

const images: Record<string, ImageMetadata> = {};
for (const [path, file] of Object.entries(files)) {
  images[path.split("/").pop()!] = file.default;
}

// Look up an image by filename, e.g. the "image" field in projectInfo.json.
export function getImageByName(name: string): ImageMetadata {
  const image = images[name];
  if (!image) {
    throw new Error(
      `Image "${name}" not found. Put it in src/assets/images/ (filenames are case-sensitive).`
    );
  }
  return image;
}
