import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Reviews from "../components/Reviews";
import ServiceList from "../components/ServiceList";
import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <header className='header relative'>
        <video className='w-full absolute video' autoPlay muted loop>
          <source src='videos/Plant_01.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div className='overlay absolute'></div>
        <div className='header-content maxwidth mx-auto w-full'>
          <Header />
          <Hero />
        </div>
      </header>
      <ServiceList />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
