import { Hero } from './components/Hero';

import { Projects } from './components/Projects';


import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}
