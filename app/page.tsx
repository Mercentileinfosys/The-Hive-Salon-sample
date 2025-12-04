'use client';

import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import BookingCTA from '@/components/BookingCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <SmoothScroll>
        <main className="relative">
          <Navbar />
          <Hero />
          <Services />
          <Gallery />
          <Team />
          <Testimonials />
          <BookingCTA />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
