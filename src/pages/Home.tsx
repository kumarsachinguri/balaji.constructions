import Header from "../components/Header";
import Hero from "../components/Hero";
import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <header className='bg-gray-700'>
        <Header />
      </header>
      <Hero />
    </>
  );
};

export default Home;
