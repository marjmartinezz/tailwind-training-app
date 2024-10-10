import BlogSection from './components/Blog';
import Content from './components/Content';
import Feature from './components/Feature';
import Hero from './components/Hero';
import TeamSection from './components/Team';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Content />
      <TeamSection />
      <Testimonials />
      <BlogSection />
    </main>
  );
}
