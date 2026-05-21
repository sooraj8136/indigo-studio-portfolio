import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Tech from "@/components/Tech";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Studio. — Premium freelance web design" },
      {
        name: "description",
        content:
          "A four-person studio crafting premium digital interfaces, brand systems, and product UI for modern brands.",
      },
      { property: "og:title", content: "Studio. — Premium freelance web design" },
      {
        property: "og:description",
        content: "Premium digital interfaces for modern brands. Studios, startups, and founders.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      <Hero />
      <Work />
      <Services />
      <Tech />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
