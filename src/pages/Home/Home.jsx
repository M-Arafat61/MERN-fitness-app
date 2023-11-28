import AboutUs from "../../components/Home/AboutSection/AboutUs";
import Carousal from "../../components/Home/Banner/Carousal";
import FeaturedClasses from "../../components/Home/FeaturedClass/FeaturedClasses";
import Features from "../../components/Home/FeaturedSection/Features";
import LatesArticles from "../../components/Home/LatestArticles/LatesArticles";
import Reviews from "../../components/Home/Reviews/Reviews";
import SubscribeUser from "../../components/Home/SubscribeUser/SubscribeUser";

const Home = () => {
  return (
    <>
      <Carousal />
      <Features />
      <AboutUs />
      <FeaturedClasses />
      <Reviews />
      <LatesArticles />
      <SubscribeUser />
    </>
  );
};

export default Home;
