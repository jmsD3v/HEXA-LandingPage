import Section from '@/components/ui/section';
import Hero from '@/components/sections/hero';
import ServicesSection from '@/components/sections/servicesSection';
import WhyUs from '@/components/sections/whyUs';
import AboutUs from '@/components/sections/aboutUs';
import Contact from '@/components/sections/contact';
import Footer from '@/components/sections/footer';

export default function Sections() {
  return (
    <>
      <Section variant='hero'>
        <Hero />
      </Section>

      <Section id='ServicesSection' variant='services' withContainer>
        <ServicesSection />
      </Section>

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
