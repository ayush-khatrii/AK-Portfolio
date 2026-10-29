import SectionHeading from "@/components/SectionHeading";
import { galleryImages } from "@/constants";

export default function GalleryPage() {
  return (
    <section className="min-h-[70svh] px-5 py-12 sm:px-8">
      <SectionHeading title="Gallery" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map(({ src, title, alt }, index) => (
          <figure key={src} className={`group overflow-hidden rounded-2xl border border-border bg-card ${index === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}>
            {/* Native images support the existing external gallery hosts without an optimization proxy. */}
            <img src={src} alt={alt} loading={index === 0 ? "eager" : "lazy"} className="aspect-[4/5] w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]" />
            <figcaption className="flex justify-between px-5 py-4 text-sm"><span>{title}</span><span className="font-mono text-cobalt dark:text-lime">{String(index + 1).padStart(2, "0")}</span></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
