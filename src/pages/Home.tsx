import AddSection from "../component/AddSection/AddSection";
import Blog from "../component/Blog/Blog";
import categories from "../product.json";

import Hero from "../component/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero data={categories} />
      {/* <Banner /> */}
      <AddSection />
      <Blog />
    </div>
  );
};

export default Home;
// function fetchPhone() {
//   throw new Error("Function not implemented.");
// }
