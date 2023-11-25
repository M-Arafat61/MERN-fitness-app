import AboutUs from "../../components/Home/AboutSection/AboutUs";
import Carousal from "../../components/Home/Banner/Carousal";
import Features from "../../components/Home/FeaturedSection/Features";
import Reviews from "../../components/Home/Reviews/Reviews";
import SubscribeUser from "../../components/Home/SubscribeUser/SubscribeUser";

const Home = () => {
  return (
    <>
      <Carousal />
      <Features />
      <AboutUs />
      {/* 👉 Featured classes: show some classes Minimum 6. [see optional] */}
      <Reviews />
      {/* Blog or Latest Articles: Highlights of recent Community/Forums posts or
articles related to fitness, nutrition, and exercise. Links to read more or
explore the blog section.
 */}
      <SubscribeUser />

      {/* Trainer 3 with some info */}
    </>
  );
};

export default Home;
