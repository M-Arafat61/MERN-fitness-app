import { useEffect, useState } from "react";
import { axiosPublic } from "../../../hooks/useAxiosPublic";
import Container from "../../Shared/Container/Container";

const LatesArticles = () => {
  const [articles, setArticles] = useState([]);
  const [expanded, setExpanded] = useState({});
  useEffect(() => {
    const fetchClasses = async () => {
      const response = await axiosPublic.get("/forums");
      setArticles(response.data);
      const initialExpandedState = {};
      response.data.forEach(post => {
        initialExpandedState[post._id] = false;
      });
      setExpanded(initialExpandedState);
    };
    fetchClasses();
  }, []);
  const handleToggleExpand = postId => {
    setExpanded({ ...expanded, [postId]: !expanded[postId] });
  };

  const truncateDescription = description => {
    const words = description.split(" ");
    if (words.length > 20) {
      return words.slice(0, 20).join(" ") + "...";
    }
    return description;
  };
  console.log(articles);
  return (
    <Container>
      <div className='mx-auto my-10 gap-5'>
        <h2 className='text-2xl md:text-5xl font-bold px-3 bg-extended-gray py-5'>
          Latest Articles
        </h2>
      </div>
      <div className='flex flex-col gap-8 '>
        {articles.map(post => (
          <div
            key={post._id}
            className='shadow-sm border border-extended-gray rounded-xl overflow-hidden p-5 space-y-3'
          >
            <h3 className='text-xl font-bold'>{post.title}</h3>
            <p>{post.date}</p>
            <hr />
            <p className='text-lg'>
              {expanded[post._id]
                ? post.description
                : truncateDescription(post.description)}
              {!expanded[post._id] ? (
                <button
                  onClick={() => handleToggleExpand(post._id)}
                  className='text-extended-teal underline focus:outline-none'
                >
                  read more
                </button>
              ) : (
                <button
                  onClick={() => handleToggleExpand(post._id)}
                  className='text-extended-teal underline focus:outline-none'
                >
                  see less
                </button>
              )}
            </p>
            <div className='flex gap-2 italic text-extended-teal'>
              {post.tags.map((tag, index) => (
                <p key={index}>#{tag}</p>
              ))}
            </div>
            <hr />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default LatesArticles;
