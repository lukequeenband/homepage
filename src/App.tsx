import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import BioSection from './components/BioSection';
import TourSection from './components/TourSection';
import MusicSection from './components/MusicSection';
import VideoSection from './components/VideoSection';
import TipJar from './components/TipJar';
import TrustedBy from './components/TrustedBy';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureCards />
      <BioSection />
      <TourSection />
      <MusicSection />
      <VideoSection />
      <TipJar />
      <TrustedBy />
      <Testimonials />
      <Footer />
    </div>
  );
}


