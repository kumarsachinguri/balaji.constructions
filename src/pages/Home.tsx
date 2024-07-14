import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ServiceList from "../components/ServiceList";
import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <ServiceList />
      <Contact />
    </>
  );
};

export default Home;
