import { readdir } from "node:fs/promises";
import path from "node:path";
import DraggableGallery, { type GalleryImage } from "@/components/DraggableGallery";
import SectionHeading from "@/components/SectionHeading";

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);
const EXCLUDED_IMAGES = new Set(["og-image.png", "twitter-og.png"]);

const collectImages = async (directory: string, root = directory): Promise<GalleryImage[]> => {
  const entries = await readdir(directory, { withFileTypes: true });
  const images = await Promise.all(entries.map(async (entry): Promise<GalleryImage[]> => {
    const absolutePath = path.join(directory, entry.name);

    if (entry.isDirectory()) return collectImages(absolutePath, root);

    const extension = path.extname(entry.name).toLowerCase();
    if (!IMAGE_EXTENSIONS.has(extension) || EXCLUDED_IMAGES.has(entry.name.toLowerCase())) return [];

    const relativePath = path.relative(root, absolutePath).split(path.sep).map(encodeURIComponent).join("/");
    const rawTitle = path.basename(entry.name, extension).replace(/[-_]+/g, " ").trim();
    const title = rawTitle.replace(/\b\w/g, (character) => character.toUpperCase());

    return [{
      src: `/${relativePath}`,
      title,
      alt: `${title} — Ayush Khatri`,
    }];
  }));

  return images.flat();
};

const GalleryPage = async () => {
  const publicDirectory = path.join(process.cwd(), "public");
  const images = (await collectImages(publicDirectory)).sort((first, second) => {
    if (first.src === "/profile-pic.png") return -1;
    if (second.src === "/profile-pic.png") return 1;
    return first.src.localeCompare(second.src);
  });

  return (
    <section className="min-h-[70svh] overflow-x-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <SectionHeading index="01" label="Personal Archive" title="Gallery" count={`${String(images.length).padStart(2, "0")} ${images.length === 1 ? "IMAGE" : "IMAGES"}`} />
      <DraggableGallery images={images} />
    </section>
  );
};

export default GalleryPage;
