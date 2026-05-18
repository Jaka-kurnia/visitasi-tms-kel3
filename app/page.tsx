import Image from "next/image";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Workflow } from "@/components/Workflow";
import { TechStack } from "@/components/tech_stack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300 text-slate-900 font-sans">
      <Header />

      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full pt-32 pb-24 flex flex-col gap-8 md:gap-10">
        <section id="home">
          <Hero />
        </section>

        <section id="workflow">
          {/* Workflow */}
          <Workflow />
        </section>
        <section id="techstack">
          {/* Teach stack */}
          <TechStack />
        </section>
      </main>
      <Footer />
    </div>
  );
}
