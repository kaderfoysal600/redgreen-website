import AddSection from "../component/AddSection/AddSection";
import Blog from "../component/Blog/Blog";

import Hero from "../component/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Banner /> */}
      <AddSection />
      <Blog />
 
    </div>
  );
};

export default Home;
