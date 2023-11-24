import Carousal from "../../components/Home/Banner/Carousal";
import Features from "../../components/Home/FeaturedSection/Features";
import Container from "../../components/Shared/Container/Container";

const Home = () => {
  return (
    <Container>
      <Carousal />
      <Features />
    </Container>
  );
};

export default Home;
