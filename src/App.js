import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="max-h-[2942px] max-w-[1440px] bg-[#000235] scroll-smooth mix-blend-overlay">
    <Navbar />
    <Hero />
    <About />
    <Testimonials />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
