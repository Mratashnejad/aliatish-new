// pages/index.js (or Home.js)
import Head from 'next/head';
import HeroSection from '@/components/homePageComponents/heroSection'


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

    </>
  );
}
