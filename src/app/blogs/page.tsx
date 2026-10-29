import SectionHeading from "@/components/SectionHeading";

export default function BlogsPage() {
  return (
    <section className="min-h-[70svh] px-5 py-12 sm:px-8">
      <SectionHeading title="Blogs" />
      <div aria-hidden="true" className="h-px bg-gradient-to-r from-primary via-accent/40 to-transparent" />
    </section>
  );
}
