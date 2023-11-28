import toast from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";

const AddNewClass = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [classData, setClassData] = useState({
    equipments: "",
    days: "",
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setClassData({ ...classData, [name]: value });
  };

  const handleAddClass = e => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const instructor = form.instructor.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const location = form.location.value;
    const capacity = form.capacity.value;
    const difficulty = form.difficulty.value;
    const selectedPackage = form.package.value;
    const equipmentArray = classData.equipments
      .split(",")
      .map(equipment => equipment.trim());
    const daysArray = classData.days.split(",").map(day => day.trim());
    const classInfo = {
      title,
      instructor,
      email,
      photo,
      description,
      location,
      difficulty,
      capacity,
      selectedPackage,
      equipmentArray,
      daysArray,
    };
    const postClassData = async () => {
      const res = await axiosSecure.post("/classes", classInfo);
      console.log(res.data);
      form.reset();
      toast.success("Class added successfully!");
    };
    postClassData();
    console.log(classInfo);
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
                <span className='label-text'>Instructor Email</span>
              </label>
              <input
                type='text'
                placeholder='Email'
                name='email'
                defaultValue={user?.email}
                readOnly
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Class Photo URL</span>
              </label>
              <input
                type='text'
                placeholder='Photo URL'
                name='photo'
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
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text'>Total Capacity</span>
              </label>
              <input
                type='number'
                placeholder='Capacity'
                name='capacity'
                className='input input-bordered'
                required
              />
            </div>
            <div className='flex justify-between gap-5 items-end'>
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
              <div className='form-control w-full'>
                <label className='label'>
                  <span className='label-text'>Package Name</span>
                </label>
                <select name='package' className='select  select-bordered '>
                  <option value='Silver'>Silver</option>
                  <option value='Gold'>Gold</option>
                  <option value='Diamond'>Diamond</option>
                </select>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <div>
                <label className='label'>
                  <span className='label-text'>
                    Equipments (Comma-Separated)
                  </span>
                </label>
                <input
                  type='text'
                  name='equipments'
                  value={classData.equipments}
                  onChange={handleChange}
                  placeholder='Equipments'
                  className='input input-bordered'
                  required
                />
              </div>
              <div>
                <label className='label'>
                  <span className='label-text'>Days (Comma-Separated)</span>
                </label>
                <input
                  type='text'
                  name='days'
                  value={classData.days}
                  onChange={handleChange}
                  placeholder='Days in a week'
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
