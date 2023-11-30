import { useEffect, useState } from "react";
import { axiosPublic } from "../../../hooks/useAxiosPublic";
import ClassesCard from "./ClassesCard";
import Container from "../../Shared/Container/Container";

const FeaturedClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    const fetchClasses = async () => {
      const response = await axiosPublic.get("/classes");
      setClasses(response.data);
    };
    fetchClasses();
  }, []);

  return (
    <Container>
      <h2 className='text-2xl md:text-5xl px-3 bg-extended-gray py-5 font-bold mb-8 mt-10 '>
        Classes to Take
      </h2>
      <div className=' mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {classes.map(eachClass => (
          <ClassesCard key={eachClass._id} eachClass={eachClass}></ClassesCard>
        ))}
      </div>
    </Container>
  );
};

export default FeaturedClasses;
