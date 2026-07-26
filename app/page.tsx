import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Process from "@/components/Process";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import DemoForm from "@/components/DemoForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-paper-50">
      <Navbar />
      <Hero />
      <TrustBar />
      <Process />
      <Features />
      <Stats />
      <Testimonials />
      <DemoForm />
      <Footer />
    </main>
  );
}
