import CircularGallery from "@/components/CircularGallery";
import SectionHeading from "@/components/SectionHeading";
import { galleryImages } from "@/constants";

const GalleryPage = () => (
  <section className="min-h-[70svh] overflow-x-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
    <SectionHeading title="Gallery" description="" />
    <div className="relative h-[600px] w-full sm:h-[640px] lg:h-[700px]">
      <CircularGallery
        items={galleryImages.map(({ src, title }) => ({ image: src, text: title }))}
        bend={1}
        textColor="#ffffff"
        borderRadius={0.05}
        scrollEase={0.15}
        fontUrl="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap"
        font="bold 30px Orbitron"
        scrollSpeed={3.8}
      />
    </div>
  </section>
);

export default GalleryPage;
