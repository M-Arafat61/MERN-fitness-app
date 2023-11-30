import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useTrainer from "../../../hooks/useTrainer";
import useAdmin from "../../../hooks/useAdmin";
import { useNavigate } from "react-router-dom";

const AddNewForumPost = () => {
  const [isAdmin] = useAdmin();
  const [isTrainer] = useTrainer();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    tags: "",
  });

  const axiosSecure = useAxiosSecure();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const tagsArray = formData.tags.split(",").map(tag => tag.trim());
    console.log(formData);
    try {
      const res = await axiosSecure.post("/forums", {
        ...formData,
        tags: tagsArray,
      });
      console.log(res.data);
      toast.success("Forums post added !✌");

      setFormData({ title: "", description: "", date: "", tags: "" });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  useEffect(() => {
    if (!isAdmin && !isTrainer) {
      navigate("/dashboard");
    }
  }, [isAdmin, isTrainer, navigate]);

  return (
    <div className='md:w-3/4 mx-auto mt-14'>
      <div className='flex flex-col '>
        <div className=' text-lg bg-base-100'></div>
        <h2 className='text-3xl font-bold mb-5'>Add New Forum</h2>

        <form onSubmit={handleSubmit} className=' shadow-md space-y-5 p-5'>
          <div className='form-control '>
            <label className='label'>
              <span className='label-text'>Title</span>
            </label>
            <input
              type='text'
              name='title'
              value={formData.title}
              onChange={handleChange}
              className='input input-bordered'
              required
            />
          </div>
          <div>
            <label className='label'>
              <span className='label-text'> Description</span>
            </label>
            <textarea
              name='description'
              value={formData.description}
              onChange={handleChange}
              className='input input-bordered w-full h-32'
              required
            />
          </div>
          <div>
            <label className='label'>
              <span className='label-text'> Date</span>
            </label>
            <input
              type='date'
              name='date'
              value={formData.date}
              onChange={handleChange}
              className='input input-bordered'
              required
            />
          </div>
          <div>
            <label className='label'>
              <span className='label-text'>Tags (Comma-Separated)</span>
            </label>
            <input
              type='text'
              name='tags'
              value={formData.tags}
              onChange={handleChange}
              className='input input-bordered'
              required
            />
          </div>
          <button
            className='bg-extended-teal w-full py-2 font-bold text-white uppercase'
            type='submit'
          >
            Add Forum
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewForumPost;
