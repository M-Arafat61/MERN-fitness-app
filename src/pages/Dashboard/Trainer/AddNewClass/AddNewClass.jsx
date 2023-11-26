import toast from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AddNewClass = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleAddClass = e => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const instructor = form.instructor.value;
    const description = form.description.value;
    const location = form.location.value;
    const difficulty = form.difficulty.value;
    const classData = {
      title,
      instructor,
      description,
      location,
      difficulty,
    };
    const postClassData = async () => {
      const res = await axiosSecure.post("/classes", classData);
      console.log(res.data);
      form.reset();
      toast.success("Class added successfully!");
    };
    postClassData();
  };
  return (
    <div className='hero mt-10'>
      <div className='hero-content flex-col '>
        <div className=' w-full text-lg  bg-base-100'>
          <form
            onSubmit={handleAddClass}
            className='card-body shadow-md space-y-5'
          >
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Class Title</span>
              </label>
              <input
                type='text'
                placeholder='Class Title'
                name='title'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Instructor Name</span>
              </label>
              <input
                type='text'
                placeholder='Instructor'
                name='instructor'
                defaultValue={user?.displayName}
                readOnly
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Class Details</span>
              </label>
              <input
                type='text'
                placeholder='Class Info'
                name='description'
                className='input input-bordered'
              />
            </div>
            <div className='flex justify-between gap-5'>
              <div className='form-control w-full'>
                <label className='label'>
                  <span className='label-text'>location</span>
                </label>
                <input
                  type='text'
                  placeholder='location'
                  name='location'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control w-full'>
                <label className='label'>
                  <span className='label-text'>Difficulty Level</span>
                </label>
                <input
                  type='text'
                  placeholder='Difficulty'
                  name='difficulty'
                  className='input input-bordered'
                  required
                />
              </div>
            </div>

            <button className='bg-extended-teal w-full py-2 ' type='submit'>
              Add Classes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewClass;
