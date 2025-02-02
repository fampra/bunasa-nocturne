import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import CursorFollow from "../components/CursorFollow";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CursorFollow />
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
    </div>
  );
};

export default Index;