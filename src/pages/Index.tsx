
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Shariar Nafiz - Mobile App Engineer</title>
        <meta name="description" content="Shariar Nafiz is a Mobile App Engineer specializing in Kotlin, Flutter, Jetpack Compose, and Java. View his portfolio, skills and experience." />
        <meta name="keywords" content="Shariar Nafiz, Mobile App Engineer, Mobile Developer, Kotlin, Flutter, Jetpack Compose, Java, Android, Portfolio" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Shariar Nafiz - Mobile App Engineer" />
        <meta property="og:description" content="Mobile App Engineer specializing in Kotlin, Flutter, and Jetpack Compose" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shariar-nafiz.com" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shariar Nafiz - Mobile App Engineer" />
        <meta name="twitter:description" content="Mobile App Engineer specializing in Kotlin, Flutter, and Jetpack Compose" />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Shariar Nafiz" />
        <link rel="canonical" href="https://shariar-nafiz.com" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
