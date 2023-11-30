import { useState } from "react";
import Container from "../../components/Shared/Container/Container";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const TrainerApplicationForm = () => {
  const { user } = useAuth();

  const [skills, setSkills] = useState([]);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [availableDays, setAvailableDays] = useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  });
  const [timeSlots, setTimeSlots] = useState({
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
  });

  const handleSkillChange = e => {
    const { value, checked } = e.target;
    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter(skill => skill !== value));
    }
  };
  const handleDayChange = e => {
    const { name, checked } = e.target;
    setAvailableDays({ ...availableDays, [name]: checked });
  };

  const handleTimeSlotChange = e => {
    const { name, value } = e.target;
    const [day, slotIndex, timeType] = name.split("_");
    const updatedSlots = [...timeSlots[day]];
    updatedSlots[slotIndex] = {
      ...updatedSlots[slotIndex],
      [timeType]: value,
    };
    setTimeSlots({ ...timeSlots, [day]: updatedSlots });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const profileImage = form.photo.value;
    const age = form.age.value;
    const experience = form.year.value;
    const twitter = form.twitter.value;
    const linkedin = form.linkedin.value;
    const instagram = form.instagram.value;
    const availableSlots = form.slot.value;
    const timeSlotOfDays = Object.entries(timeSlots)
      // eslint-disable-next-line no-unused-vars
      .filter(([_, slots]) => slots.length > 0)
      .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});

    console.log(timeSlotOfDays);

    const trainerInfo = {
      name,
      email,
      profileImage,
      age,
      experience,
      availableDays,
      availableSlots,
      timeSlotOfDays,
      skills,
      role: "member",
      social: {
        twitter: twitter,
        linkedin: linkedin,
        instagram: instagram,
      },
    };
    console.log(trainerInfo);
    axiosSecure
      .post("/trainer-applications", trainerInfo)
      .then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
          navigate("/trainer");
          toast.success("Application successful!✌");
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Container>
      <div className='text-center text-3xl font-bold'>
        Application for Becoming a Trainer
      </div>
      <div className='hero '>
        <div className='hero-content flex-col '>
          <div className=' w-full text-lg  bg-base-100'>
            <form
              onSubmit={handleSubmit}
              className='card-body shadow-md space-y-5'
            >
              <div className='form-control'>
                <label className='label'>
                  <span className=''>Full Name</span>
                </label>
                <input
                  type='text'
                  placeholder='Full Name'
                  name='name'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='email'
                  name='email'
                  defaultValue={user?.email}
                  readOnly
                  className='input input-bordered'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Profile Image</span>
                </label>
                <input
                  type='text'
                  placeholder='Photo URL'
                  name='photo'
                  className='input input-bordered'
                />
              </div>
              <div className='flex justify-between gap-5'>
                <div className='form-control w-full'>
                  <label className='label'>
                    <span className='label-text'>Age</span>
                  </label>
                  <input
                    type='number'
                    placeholder='age'
                    name='age'
                    className='input input-bordered'
                    required
                  />
                </div>
                <div className='form-control w-full'>
                  <label className='label'>
                    <span className='label-text'>Experienced for</span>
                  </label>
                  <input
                    type='number'
                    placeholder='year'
                    name='year'
                    className='input input-bordered'
                    required
                  />
                </div>
              </div>

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Twitter</span>
                </label>
                <input
                  type='text'
                  placeholder='Twitter account URL'
                  name='twitter'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>LinkedIn</span>
                </label>
                <input
                  type='text'
                  placeholder='LinkedIn account URL'
                  name='linkedin'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Instagram</span>
                </label>
                <input
                  type='text'
                  placeholder='Instagram account URL'
                  name='instagram'
                  className='input input-bordered'
                />
              </div>

              <label>
                <span>Skills</span>
                <div className='grid grid-cols-3 gap-5 border border-extended-teal rounded-xl overflow-hidden p-5 mt-2'>
                  <div>
                    <label>
                      <input
                        type='checkbox'
                        value='Functional Training'
                        checked={skills.includes("Functional Training")}
                        onChange={handleSkillChange}
                      />
                      &nbsp; Functional Training
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type='checkbox'
                        value='Nutrition Knowledge'
                        checked={skills.includes("Nutrition Knowledge")}
                        onChange={handleSkillChange}
                      />
                      &nbsp; Nutrition Knowledge
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type='checkbox'
                        value='Motivational Coaching'
                        checked={skills.includes("Motivational Coaching")}
                        onChange={handleSkillChange}
                      />
                      &nbsp; Motivational Coaching
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type='checkbox'
                        value='Injury Prevention'
                        checked={skills.includes("Injury Prevention")}
                        onChange={handleSkillChange}
                      />
                      &nbsp; Injury Prevention
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type='checkbox'
                        value='Adaptability'
                        checked={skills.includes("Adaptability")}
                        onChange={handleSkillChange}
                      />
                      &nbsp; Adaptability
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type='checkbox'
                        value='Communication Skills'
                        checked={skills.includes("Communication Skills")}
                        onChange={handleSkillChange}
                      />
                      &nbsp; Communication Skills
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type='checkbox'
                        value='Strength and Conditioning'
                        checked={skills.includes("Strength and Conditioning")}
                        onChange={handleSkillChange}
                      />
                      &nbsp; Strength and Conditioning
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type='checkbox'
                        value='Flexibility Training'
                        checked={skills.includes("Flexibility Training")}
                        onChange={handleSkillChange}
                      />
                      &nbsp; Flexibility Training
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type='checkbox'
                        value='Goal Setting and Planning'
                        checked={skills.includes("Goal Setting and Planning")}
                        onChange={handleSkillChange}
                      />
                      &nbsp; Goal Setting and Planning
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type='checkbox'
                        value='CPR and First Aid'
                        checked={skills.includes("CPR and First Aid")}
                        onChange={handleSkillChange}
                      />
                      &nbsp; CPR and First Aid
                    </label>
                  </div>
                </div>
              </label>

              <label>
                Available Time in a Week
                <div className='grid grid-cols-4 gap-5 border border-extended-teal rounded-xl overflow-hidden p-5 mt-2'>
                  <label>
                    <input
                      type='checkbox'
                      name='saturday'
                      checked={availableDays.saturday}
                      onChange={handleDayChange}
                    />
                    &nbsp; Saturday
                  </label>

                  <label>
                    <input
                      type='checkbox'
                      name='sunday'
                      checked={availableDays.sunday}
                      onChange={handleDayChange}
                    />
                    &nbsp; Sunday
                  </label>
                  <label>
                    <input
                      type='checkbox'
                      name='monday'
                      checked={availableDays.monday}
                      onChange={handleDayChange}
                    />
                    &nbsp; Monday
                  </label>
                  <label>
                    <input
                      type='checkbox'
                      name='tuesday'
                      checked={availableDays.tuesday}
                      onChange={handleDayChange}
                    />
                    &nbsp; Tuesday
                  </label>
                  <label>
                    <input
                      type='checkbox'
                      name='wednesday'
                      checked={availableDays.wednesday}
                      onChange={handleDayChange}
                    />
                    &nbsp; Wednesday
                  </label>
                  <label>
                    <input
                      type='checkbox'
                      name='thursday'
                      checked={availableDays.thursday}
                      onChange={handleDayChange}
                    />
                    &nbsp; Thursday
                  </label>
                  <label>
                    <input
                      type='checkbox'
                      name='friday'
                      checked={availableDays.friday}
                      onChange={handleDayChange}
                    />
                    &nbsp; Friday
                  </label>
                </div>
              </label>
              <div className='form-control w-full'>
                <label className='label'>
                  <span className=''>Available slot in a day</span>
                </label>
                <input
                  type='number'
                  placeholder='Available slot number in a day '
                  name='slot'
                  className='input input-bordered'
                  required
                />
              </div>
              <label>
                Available Time in a Day:
                <div className='border border-extended-teal rounded-xl overflow-hidden p-5 mt-2'>
                  {Object.keys(availableDays).map(day => (
                    <div key={day}>
                      {availableDays[day] && (
                        <div>
                          <label>
                            {day.charAt(0).toUpperCase() + day.slice(1)} :
                            &nbsp;{" "}
                            {timeSlots[day].map((slot, index) => (
                              <div key={index}>
                                <input
                                  type='time'
                                  required
                                  name={`${day}_${index}_start`}
                                  value={slot.start || ""}
                                  onChange={handleTimeSlotChange}
                                />
                                to
                                <input
                                  type='time'
                                  required
                                  name={`${day}_${index}_end`}
                                  value={slot.end || ""}
                                  onChange={handleTimeSlotChange}
                                />
                                <button
                                  className='underline italic text-blue-800 rounded-lg'
                                  type='button'
                                  onClick={() => {
                                    const updatedSlots = [
                                      ...timeSlots[day].slice(0, index),
                                      ...timeSlots[day].slice(index + 1),
                                    ];
                                    setTimeSlots({
                                      ...timeSlots,
                                      [day]: updatedSlots,
                                    });
                                  }}
                                >
                                  Cancel
                                </button>
                              </div>
                            ))}
                            <button
                              className='underline italic text-blue-800 rounded-lg'
                              type='button'
                              onClick={() => {
                                const updatedSlots = [
                                  ...timeSlots[day],
                                  { start: "", end: "" },
                                ];
                                setTimeSlots({
                                  ...timeSlots,
                                  [day]: updatedSlots,
                                });
                              }}
                            >
                              Add 1h Slot
                            </button>
                          </label>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </label>

              <button className='bg-extended-teal w-full py-2 ' type='submit'>
                Apply for Trainer
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TrainerApplicationForm;
