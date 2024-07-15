import Contact from "../components/Contact";
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
      <Header />
      <Hero />
      <ServiceList />
      <Projects />
      <Reviews />
      <Contact />
    </>
  );
};

export default Home;
