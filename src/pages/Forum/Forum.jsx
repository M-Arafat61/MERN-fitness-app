import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Container from "../../components/Shared/Container/Container";
import ForumPosts from "../../components/Forum/ForumPosts";

const Forum = () => {
  const axiosSecure = useAxiosSecure();

  const { data: forumData = [] } = useQuery({
    queryKey: ["forums"],
    queryFn: async () => {
      const res = await axiosSecure.get("/forums");
      return res.data;
    },
  });
  // console.log(forumData);
  return (
    <Container>
      <div className='mx-auto my-16 gap-5'>
        <h2 className='text-3xl font-bold px-3'>Fitness Community Hub</h2>
      </div>
      <div className='flex flex-col gap-8'>
        {forumData.map(post => (
          <ForumPosts key={post._id} post={post} />
        ))}
      </div>
    </Container>
  );
};

export default Forum;
