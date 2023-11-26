import { Icon } from "@iconify/react";
import { useState } from "react";

const ForumPosts = ({ post }) => {
  const { title, description, date, tags } = post;

  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);
  const [hasUpVoted, setHasUpVoted] = useState(false);
  const [hasDownVoted, setHasDownVoted] = useState(false);

  const handleUpvote = () => {
    if (!hasUpVoted) {
      setUpvotes(upvotes + 1);
      setHasUpVoted(true);
    } else {
      setUpvotes(upvotes - 1);
      setHasUpVoted(false);
    }
  };

  const handleDownvote = () => {
    if (!hasDownVoted) {
      setDownvotes(downvotes - 1);
      setHasDownVoted(true);
    } else {
      setDownvotes(downvotes + 1);
      setHasDownVoted(false);
    }
  };

  return (
    <div className='shadow-sm rounded-xl overflow-hidden p-5 space-y-3'>
      <h3 className='text-xl font-bold'>{title}</h3>
      <p>{date}</p>
      <hr />
      <p className='text-lg'>{description}</p>
      <div className='flex gap-2 italic text-extended-teal'>
        {tags.map((tag, index) => (
          <p key={index}>#{tag}</p>
        ))}
      </div>
      <hr />
      <div className='flex gap-2'>
        {hasDownVoted ? (
          <button
            disabled
            className='bg-green-300 text-white px-3 py-1 rounded'
            onClick={handleUpvote}
          >
            <Icon icon='mdi:like' />
          </button>
        ) : (
          <button
            className='bg-green-500 text-white px-3 py-1 rounded'
            onClick={handleUpvote}
          >
            <Icon icon='mdi:like' />
          </button>
        )}
        <p>{upvotes}</p>
        {hasUpVoted ? (
          <button
            disabled
            className='bg-red-300 text-white px-3 py-1 rounded'
            onClick={handleDownvote}
          >
            <Icon icon='mdi:dislike'></Icon>
          </button>
        ) : (
          <button
            className='bg-red-500 text-white px-3 py-1 rounded'
            onClick={handleDownvote}
          >
            <Icon icon='mdi:dislike'></Icon>
          </button>
        )}
        <p>{downvotes}</p>
      </div>
      <hr />
    </div>
  );
};

export default ForumPosts;
