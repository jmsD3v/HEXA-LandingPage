import Section from '@/components/ui/section';
import Hero from '@/components/sections/hero';
import Clients from '@/components/sections/clients';
import ServicesSection from '@/components/sections/servicesSection';
import Projects from '@/components/sections/projects';
import WhyUs from '@/components/sections/whyUs';
import AboutUs from '@/components/sections/aboutUs';
import Contact from '@/components/sections/contact';
import Footer from '@/components/sections/footer';

const SHOW_NEW_FEATURES = true;

export default function Sections() {
  return (
    <>
      <Section variant='hero'>
        <Hero />
      </Section>

      {/* Clients Section (Trust Bar) */}
      {SHOW_NEW_FEATURES && (
        <section id='clients'>
          <Clients />
        </section>
      )}

      <Section id='ServicesSection' variant='services' withContainer>
        <ServicesSection />
      </Section>

      {/* Projects Section (Portfolio) */}
      {SHOW_NEW_FEATURES && (
        <section id='projects'>
          <Projects />
        </section>
      )}

      <Section id='whyUs' variant='whyUs' withContainer>
        <WhyUs />
      </Section>
      
      <Section id='aboutUs' variant='aboutUs' withContainer>
        <AboutUs />
      </Section>

      <Section id='contact' variant='contact' withContainer>
        <Contact />
      </Section>

      <section id='footer'>
        <Footer />
      </section>
    </>
  );
}
