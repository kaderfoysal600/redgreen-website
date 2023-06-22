import AddSection from "../component/AddSection/AddSection";
import Blog from "../component/Blog/Blog";
import Footer from "../component/Footer/Footer";
import Hero from "../component/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Banner /> */}
      <AddSection />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
