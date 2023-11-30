import { Helmet } from "react-helmet-async";
import AboutUs from "../../components/Home/AboutSection/AboutUs";
import Carousal from "../../components/Home/Banner/Carousal";
import FeaturedClasses from "../../components/Home/FeaturedClass/FeaturedClasses";
import Features from "../../components/Home/FeaturedSection/Features";
import LatesArticles from "../../components/Home/LatestArticles/LatesArticles";
import Reviews from "../../components/Home/Reviews/Reviews";
import SubscribeUser from "../../components/Home/SubscribeUser/SubscribeUser";
import Team from "../../components/Home/TeamSection/Team";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SyncFit Connect | Home</title>
      </Helmet>
      <Carousal />
      <Features />
      <div className='bg-[#9DB2BF]'>
        <AboutUs />
      </div>
      <FeaturedClasses />
      <div className='bg-[#526D82]'>
        <Reviews />
      </div>
      <LatesArticles />
      <SubscribeUser />
      <Team />
    </div>
  );
};

export default Home;
