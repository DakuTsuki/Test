
import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import BookingWidget from './components/BookingWidget';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Testimonials from './components/Testimonials';
import ContactLocation from './components/ContactLocation';

const App: React.FC = () => {
  return (
    <Layout>
      <section id="home" aria-label="Welcome section">
        <Hero />
      </section>

      <div className="relative z-20 -mt-16 md:-mt-20">
         <BookingWidget />
      </div>

      <section id="about" className="py-20 bg-beige" aria-labelledby="about-heading">
        <About />
      </section>

      <section id="rooms" className="py-20 bg-white" aria-labelledby="rooms-heading">
        <Rooms />
      </section>

      <section id="amenities" className="py-20 bg-olive text-white" aria-labelledby="amenities-heading">
        <Amenities />
      </section>

      <section id="reviews" className="py-20 bg-beige" aria-labelledby="reviews-heading">
        <Testimonials />
      </section>

      <section id="contact" className="py-20 bg-white" aria-labelledby="contact-heading">
        <ContactLocation />
      </section>
    </Layout>
  );
};

export default App;
