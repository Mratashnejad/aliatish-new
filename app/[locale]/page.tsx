// pages/index.js (or Home.js)
import Head from 'next/head';
import HeroSection from '@/components/homePageComponents/heroSection'
import WhyAliatish from '@/components/homePageComponents/whyaliatish'
import HomePackages from '@/components/homePageComponents/homePackages'
import AboutSection from '@/components/homePageComponents/aboutSection';
import PortfolioSection from '@/components/homePageComponents/porfolioSection';
import TestimonialsSection from '@/components/homePageComponents/testimonialsSection';
import WhyNextSection from '@/components/homePageComponents/whyNextSection';
import WhyNodeSection from '@/components/homePageComponents/whyNodeSections';


export default function Home() {
  return (
    <>
      <Head>
        <title>Ali Atish - Web Development, Web Application, Full Stack</title>
        <meta
          name="description"
          content="Full Stack Developer specializing in building scalable web applications with modern technologies. Order your web application now."
        />
      </Head>

      {/* Hero Section */}
      <HeroSection />

      {/* Pachages in HomePage */}
      <HomePackages/>

      {/* Why Choose Aliatish Section */}
      {/* <WhyAliatish /> */}

      {/* <TestimonialsSection/>
      <WhyNextSection/>
      <WhyNodeSection/> */}
      {/* <AboutSection/> */}
    </>
  );
}
