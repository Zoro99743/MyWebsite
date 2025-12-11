import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-white/60 border-t border-white/10">
        <div className="container mx-auto px-4">
          <p>
            © {new Date().getFullYear()} Sanjay. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

