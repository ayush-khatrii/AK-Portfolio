import DraggableGallery from "@/components/DraggableGallery";
import SectionHeading from "@/components/SectionHeading";
import { galleryImages } from "@/constants";

const GalleryPage = () => (
  <section className="min-h-[70svh] overflow-x-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
    <SectionHeading title="Gallery" description="A visual collection of moments, interests, and work beyond the code." />
    <DraggableGallery images={galleryImages} />
  </section>
);

export default GalleryPage;
