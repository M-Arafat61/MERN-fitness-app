import Container from "../../Shared/Container/Container";
import FeaturesCard from "./FeaturesCard";
import ngImg from "../../../assets/Images/Features/nutrition.jpg";
import communityImg from "../../../assets/Images/Features/Community.jpg";
import competitionsImg from "../../../assets/Images/Features/competitions.jpg";
import appImg from "../../../assets/Images/Features/mobileapp.jpg";
import personalizedImg from "../../../assets/Images/Features/Personalized.jpg";
import progressImg from "../../../assets/Images/Features/Progress.jpg";
import virtualImg from "../../../assets/Images/Features/virtual.jpg";
import yogaImg from "../../../assets/Images/Features/yoga.jpg";

const Features = () => {
  return (
    <Container>
      <div className='mt-10 md:mt-16 '>
        <div className='text-2xl md:text-5xl font-bold mb-5 md:mb-10 bg-extended-gray text-center py-5'>
          Our Features
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
          <FeaturesCard
            cardImage={personalizedImg}
            cardTitle={"Personalized Workout Plans"}
            cardDesc={
              "Tailored exercise routines based on individual fitness levels, goals, and preferences."
            }
          ></FeaturesCard>
          <FeaturesCard
            cardImage={progressImg}
            cardTitle={"Progress Tracking"}
            cardDesc={
              "Tools to track and visualize progress, including charts, stats, and milestones achieved."
            }
          ></FeaturesCard>
          <FeaturesCard
            cardImage={ngImg}
            cardTitle={"Nutrition Guidance"}
            cardDesc={
              "Access to nutrition plans, meal ideas, and dietary guidance complementing fitness goals."
            }
          ></FeaturesCard>
          <FeaturesCard
            cardImage={virtualImg}
            cardTitle={"Live Classes or Workouts"}
            cardDesc={
              "Offering live-streamed exercise sessions or classes led by fitness experts in real-time.Live Classes or Workouts."
            }
          ></FeaturesCard>
          <FeaturesCard
            cardImage={communityImg}
            cardTitle={"Community Support"}
            cardDesc={
              "A platform fostering a supportive community, enabling users to share experiences, tips, and motivation."
            }
          ></FeaturesCard>
          <FeaturesCard
            cardImage={competitionsImg}
            cardTitle={"Challenges and Competitions"}
            cardDesc={
              "Engaging challenges, competitions, or notice board to encourage consistency and friendly competition among users."
            }
          ></FeaturesCard>
          <FeaturesCard
            cardImage={appImg}
            cardTitle={"Mobile App Integration"}
            cardDesc={
              "Seamless integration with a mobile app for on-the-go workout tracking, reminders, and access to resources."
            }
          ></FeaturesCard>
          <FeaturesCard
            cardImage={yogaImg}
            cardTitle={"Variety of Workout Options"}
            cardDesc={
              " Diverse workout options including yoga, HIIT, strength training, dance, and more to cater to different preferences and fitness levels."
            }
          ></FeaturesCard>
        </div>
      </div>
    </Container>
  );
};

export default Features;
/* 

Nutrition Guidance
Personalized Workout Plans
Variety of Workout Options
Mobile App Integration
Community Support
Progress Tracking
Challenges and Competitions
Virtual Trainer/Coach
*/
