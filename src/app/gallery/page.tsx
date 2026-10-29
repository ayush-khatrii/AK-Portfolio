import SectionHeading from "@/components/SectionHeading";
import InteractiveGallery from "@/components/InteractiveGallery";
import Reveal from "@/components/Reveal";

export default function GalleryPage() {
  return <section className="page-shell"><Reveal><SectionHeading as="h1" title="Gallery" /></Reveal><InteractiveGallery /></section>;
}
